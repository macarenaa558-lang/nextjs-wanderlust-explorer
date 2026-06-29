"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const linkClassName = (isActive: boolean) =>
  isActive
    ? "rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-semibold shadow-sm"
    : "rounded-full border border-slate-200 bg-white text-slate-700 px-4 py-2 text-sm font-semibold hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50 transition";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 tracking-tight">
          Wanderlust
        </Link>

        <div className="flex flex-wrap gap-2">
          <Link
            href="/experiences"
            className={linkClassName(pathname.startsWith("/experiences"))}
          >
            Experiencias
          </Link>
          <Link
            href="/favorites"
            className={linkClassName(pathname === "/favorites")}
          >
            Favoritos
          </Link>
          <Link
            href="/profile"
            className={linkClassName(pathname === "/profile")}
          >
            Perfil
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;