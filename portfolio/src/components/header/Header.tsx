"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-around items-center h-[8vh] bg-[#23232e] text-white font-sans relative">
        <Link
          href="/"
          className="text-xl uppercase tracking-[4px] font-bold"
        >
          Daniel Freitas
        </Link>

        <div
          className="z-50 cursor-pointer md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <div
            className={`w-8 h-[2px] bg-white m-2 transition-transform ${
              menuOpen ? "rotate-[-45deg] translate-y-[10px] -translate-x-[8px]" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-[2px] bg-white m-2 transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-[2px] bg-white m-2 transition-transform ${
              menuOpen ? "rotate-[45deg] -translate-y-[8px] -translate-x-[5px]" : ""
            }`}
          ></div>
        </div>

        <ul
          className={`list-none flex gap-8 transition-transform duration-300
          max-[999px]:fixed max-[999px]:top-[8vh] max-[999px]:right-0
          max-[999px]:w-[30vw] max-[999px]:h-[92vh] max-[999px]:bg-[#23232e]
          max-[999px]:flex-col max-[999px]:items-center max-[999px]:justify-around
          max-[999px]:transform ${
            menuOpen ? "max-[999px]:translate-x-0" : "max-[999px]:translate-x-full"
          }`}
        >
          <li className="tracking-wider max-[999px]:opacity-100">
            <Link href="/">
              <span className="text-[#C778DD]">#</span>home
            </Link>
          </li>
          <li className="tracking-wider max-[999px]:opacity-100">
            <Link href="/projects">
              <span className="text-[#C778DD]">#</span>projetos
            </Link>
          </li>
          <li className="tracking-wider max-[999px]:opacity-100">
            <Link href="/#sobre">
              <span className="text-[#C778DD]">#</span>sobre
            </Link>
          </li>
          <li className="tracking-wider max-[999px]:opacity-100">
            <Link href="/#contato">
              <span className="text-[#C778DD]">#</span>contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
