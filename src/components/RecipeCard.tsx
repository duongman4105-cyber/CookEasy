import { Recipe } from "@/data/recipes";
import Link from "next/link";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="group bg-card text-card-foreground border border-border rounded-4xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full w-full animate-fade-in-up">
      <div className="h-56 bg-muted relative overflow-hidden">
        <img
          src={recipe.image}
          alt={`Món ${recipe.title}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1 group-hover:bg-orange-500 transition-colors">
          ⏱ {recipe.prepTime}
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-2xl font-black mb-3 line-clamp-2 text-slate-800 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {recipe.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-orange-50 text-orange-700 text-sm font-bold rounded-lg border border-orange-100"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/recipe/${recipe.id}`}
          className="w-full block text-center py-3.5 bg-slate-100 text-slate-700 hover:bg-orange-600 hover:text-white font-bold rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-sm mt-auto"
          aria-label={`Xem công thức nấu ${recipe.title}`}
        >
          Xem Công Thức
        </Link>
      </div>
    </article>
  );
}

