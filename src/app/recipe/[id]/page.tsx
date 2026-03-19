import Link from "next/link";
import { notFound } from "next/navigation";
import connectToDatabase from "@/lib/mongodb";
import RecipeModel from "@/models/Recipe";

export default async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectToDatabase();
  
  let recipeDocs = null;
  try {
    recipeDocs = await RecipeModel.findById(id).lean();
  } catch (error) {
    return notFound();
  }

  if (!recipeDocs) {
    notFound();
  }

  const recipe = {
    id: recipeDocs._id.toString(),
    title: recipeDocs.title,
    image: recipeDocs.image,
    prepTime: recipeDocs.prepTime,
    ingredients: recipeDocs.ingredients,
    steps: recipeDocs.steps,
    tags: recipeDocs.tags,
  };

  return (
    <article className="max-w-4xl mx-auto pb-16">
      {/* Nút quay lại */}
      <div className="mb-8 pt-4 animate-fade-in-up">
        <Link 
          href="/" 
          className="inline-flex items-center text-slate-600 bg-white/80 backdrop-blur-md font-bold text-lg hover:text-primary hover:scale-105 gap-2 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all border border-slate-100"
          aria-label="Quay lại trang chủ"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Quay lại
        </Link>
      </div>

      <div className="animate-fade-in-up delay-100 opacity-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-800 tracking-tight leading-tight">
          {recipe.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <span className="bg-orange-100 text-orange-700 px-5 py-2.5 rounded-full font-bold text-lg flex items-center gap-2 shadow-sm">
            <span className="animate-pulse-soft">⏱</span> Thời gian: {recipe.prepTime}
          </span>
          {recipe.tags.map((t: string, i: number) => (
             <span key={i} className="text-slate-500 font-medium px-4 py-2 bg-slate-100 rounded-full">{t}</span>
          ))}
        </div>
      </div>

      <div className="relative group rounded-4xl overflow-hidden shadow-2xl mb-14 animate-fade-in-up delay-200 opacity-0 bg-slate-200">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-80 md:h-128 object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Nguyên liệu */}
        <section className="md:col-span-1 animate-fade-in-up delay-300 opacity-0">
          <div className="sticky top-28 bg-linear-to-br from-amber-50 to-orange-50 rounded-4xl p-6 md:p-8 border border-orange-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h2 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3 text-orange-900 border-b border-orange-200/50 pb-4">
              <span className="text-3xl animate-float inline-block">🛒</span> CẦN NHỮNG GÌ?
            </h2>
            <ul className="space-y-4">
              {recipe.ingredients.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-4 text-lg font-medium text-slate-700 group cursor-default">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 bg-orange-200 text-orange-600 rounded-full text-sm mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                    ✓
                  </span>
                  <span className="group-hover:text-slate-900 transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Các bước làm */}
        <section className="md:col-span-2 space-y-8">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center gap-3 text-slate-800 animate-fade-in-up delay-400 opacity-0">
            <span className="text-4xl animate-float inline-block" style={{ animationDelay: '1s' }}>🍳</span> LÀM NHƯ THẾ NÀO?
          </h2>
          <div className="space-y-8">
            {recipe.steps.map((step: string, index: number) => (
              <div 
                key={index} 
                className="group flex flex-col sm:flex-row gap-5 md:gap-7 bg-white p-6 md:p-8 border border-slate-100 rounded-4xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${500 + index * 100}ms` }}
              >
                <div className="shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[1.2rem] bg-orange-100 text-orange-600 font-black text-2xl md:text-3xl group-hover:bg-linear-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:rotate-6 transition-all duration-300 shadow-inner">
                  {index + 1}
                </div>
                <p className="text-xl md:text-[1.35rem] leading-relaxed text-slate-600 font-medium group-hover:text-slate-900 transition-colors">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
