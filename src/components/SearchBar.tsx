"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query.trim()) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data);
        setIsOpen(true);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchResults, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="relative w-full max-w-xs ml-4" ref={searchRef}>
      <div className="relative flex items-center">
        <svg className="absolute left-3 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder="Tìm món ăn..."
          className="w-full bg-slate-100/50 border border-slate-200 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 rounded-full py-2 pl-10 pr-4 transition-all duration-300 placeholder:text-slate-400 font-medium"
        />
        {loading && (
          <div className="absolute right-3">
            <svg className="animate-spin h-4 w-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </div>

      {/* Dropdown kết quả */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full max-w-sm right-0 bg-white border border-slate-100 rounded-2xl shadow-xl overflow-hidden z-50 animate-fade-in-up">
          {results.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto p-2 space-y-1">
              {results.map((recipe) => (
                <li key={recipe.id}>
                  <Link
                    href={`/recipe/${recipe.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <img src={recipe.image} alt={recipe.title} className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm group-hover:text-orange-600 transition-colors line-clamp-1">{recipe.title}</h4>
                      <p className="text-xs font-medium text-slate-500">⏱ {recipe.prepTime}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-slate-500 text-sm">
              Không tìm thấy món "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
