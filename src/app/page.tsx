import RecipeCard from "@/components/RecipeCard";
import AllRecipes from "@/components/AllRecipes";
import AIAssistant from "@/components/AIAssistant";
import connectToDatabase from "@/lib/mongodb";
import RecipeModel from "@/models/Recipe";
import DailyMenuModel from "@/models/DailyMenu";

async function getDailyRecipes() {
  await connectToDatabase();
  
  // Lấy thời gian hiện tại chuẩn giờ Việt Nam (UTC+7)
  const vnTime = new Date(new Date().getTime() + 7 * 3600 * 1000);
  const todayStr = vnTime.toISOString().split("T")[0]; // YYYY-MM-DD
  
  // 1. Kiểm tra hôm nay đã có lượt random nào chưa
  const todayMenu = await DailyMenuModel.findOne({ dateString: todayStr }).populate("recipes");
  if (todayMenu && todayMenu.recipes && todayMenu.recipes.length > 0) {
    return todayMenu.recipes;
  }

  // 2. Nếu chưa có, tiến hành Random menu mới
  // Tìm Menu của ngày ôm qua để lấy danh sách id không được phép trùng lập
  const yesterdayTime = new Date(vnTime.getTime() - 24 * 3600 * 1000);
  const yesterdayStr = yesterdayTime.toISOString().split("T")[0];
  const yesterdayMenu = await DailyMenuModel.findOne({ dateString: yesterdayStr });
  
  const excludedIds = yesterdayMenu ? yesterdayMenu.recipes : [];

  // Lấy tất cả các món ăn TRỪ 6 món đã xuất hiện hôm qua
  const availableRecipes = await RecipeModel.find({ _id: { $nin: excludedIds } }).lean();

  // 3. Random lấy đúng 6 món
  // Thuật toán: Fisher-Yates shuffle để tráo ngẫu nhiên
  let shuffled = [...availableRecipes];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  const selectedRecipes = shuffled.slice(0, 6);
  const selectedIds = selectedRecipes.map((r: any) => r._id);

  // 4. Lưu kết quả random vào db giữ nguyên trong 24H ngày hôm nay 
  await DailyMenuModel.create({
    dateString: todayStr,
    recipes: selectedIds
  });

  return selectedRecipes;
}

export default async function Home() {
  const dailyRecipes = await getDailyRecipes();
  
  // Load tất cả các món ăn
  const allDocs = await RecipeModel.find({}).lean();
  
  // Map chuẩn bị render cho giao diện
  const recipes = dailyRecipes.map((r: any) => ({
    id: (r._id || r.id).toString(),
    title: r.title,
    image: r.image,
    prepTime: r.prepTime,
    ingredients: r.ingredients,
    steps: r.steps,
    tags: r.tags,
  }));

  const allRecipes = allDocs.map((r: any) => ({
    id: (r._id || r.id).toString(),
    title: r.title,
    image: r.image,
    prepTime: r.prepTime,
    ingredients: r.ingredients,
    steps: r.steps,
    tags: r.tags || [],
  }));

  return (
    <div className="space-y-12">
      {/* Hero AI Section */}
      <AIAssistant />

      {/* Menu Section */}
      <section className="animate-fade-in-up delay-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-800 flex items-center gap-3">
              <span>Gợi Ý Hôm Nay</span>
              <span className="inline-flex items-center justify-center bg-orange-100 text-orange-600 p-2 rounded-full shadow-sm animate-pulse-soft">
                🔥
              </span>
            </h2>
            <p className="text-slate-500 mt-2 font-medium">Thực đơn 6 món thay đổi tự động mỗi 24H</p>
          </div>
        </div>

        {recipes.length === 0 ? (
          <div className="text-center py-16 bg-muted/50 rounded-3xl border border-dashed border-border">
            <p className="text-xl text-muted-foreground font-medium">Chưa có dữ liệu. Hãy chạy /api/seed trước.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {recipes.map((recipe: any, index: number) => (
              <div key={recipe.id} style={{ animationDelay: `${(index % 6) * 100 + 300}ms` }} className="animate-fade-in-up flex opacity-0 h-full w-full">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Block All Recipes */}
      {allRecipes.length > 0 && <AllRecipes recipes={allRecipes} />}
    </div>
  );
}

