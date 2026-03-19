import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-border shadow-sm transition-all duration-500">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer focus:outline-none">
          {/* Logo với hiệu ứng xoay nhẹ khi hove */}
          <div className="w-11 h-11 bg-linear-to-tr from-orange-600 to-orange-400 text-white rounded-xl shadow-md flex items-center justify-center font-black text-3xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ring-2 ring-orange-100 ring-offset-2 ring-offset-white">
            C
          </div>
          <h1 className="text-3xl font-black bg-clip-text text-transparent bg-linear-to-r from-orange-700 to-orange-500 tracking-tighter drop-shadow-sm">
            CookEasy
          </h1>
        </Link>
        
        {/* Nút tìm kiếm bên phải */}
        <div className="flex-1 flex justify-end">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}
