"use client";

import { useState, useMemo } from "react";
import { Recipe } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

export default function AllRecipes({ recipes }: { recipes: Recipe[] }) {
  const [activeTag, setActiveTag] = useState<string>("Tất cả");

  const tags = useMemo(() => {
    // Extract raw tags
    const allTags = recipes.flatMap((r) => r.tags);
    // Count occurrences
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Sort tags by frequency
    const sortedTags = Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);

    return ["Tất cả", ...sortedTags];
  }, [recipes]);

  const filteredRecipes = useMemo(() => {
    if (activeTag === "Tất cả") return recipes;
    return recipes.filter((r) => r.tags.includes(activeTag));
  }, [recipes, activeTag]);

  return (
    <section className="mt-16 animate-fade-in-up delay-300">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 flex items-center gap-3">
            <span>Tất Cả Món Ăn</span>
            <span className="inline-flex items-center justify-center bg-green-100 text-green-600 p-2 rounded-full shadow-sm">
              🥗
            </span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">
            Khám phá 50+ công thức nấu ăn đa dạng và hấp dẫn
          </p>
        </div>
      </div>

      {/* Bộ lọc */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 ${
              activeTag === tag
                ? "bg-orange-600 text-white ring-2 ring-orange-600/30 ring-offset-2"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Danh sách món */}
      {filteredRecipes.length === 0 ? (
        <div className="text-center py-16 bg-muted/50 rounded-3xl border border-dashed border-border">
          <p className="text-xl text-muted-foreground font-medium">Không tìm thấy món ăn nào.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredRecipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="flex h-full w-full animate-fade-in-up opacity-0"
              style={{ animationDelay: `${(index % 6) * 100}ms`, animationFillMode: "forwards" }}
            >
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
