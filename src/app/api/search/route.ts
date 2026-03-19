import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import RecipeModel from "@/models/Recipe";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json([]);
    }

    await connectToDatabase();

    // Tìm kiếm các món ăn có chứa từ khóa trong title (không phân biệt chữ hoa, chữ thường)
    const recipes = await RecipeModel.find({ 
      title: { $regex: query, $options: "i" } 
    }).limit(5).lean();

    const formattedRecipes = recipes.map((r: any) => ({
      id: r._id.toString(),
      title: r.title,
      image: r.image,
      prepTime: r.prepTime,
    }));

    return NextResponse.json(formattedRecipes);
  } catch (error) {
    console.error("Search API Error:", error);
    return NextResponse.json({ error: "Lỗi tìm kiếm" }, { status: 500 });
  }
}
