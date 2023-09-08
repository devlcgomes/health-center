import React from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <nav className="border-2 border-blue-600 container mx-auto flex items-center py-4 mt-4 sm:mt-12 ">
        <div className="border-2 border-red-600 py-1 ">
          <p>LOGO</p>
        </div>
        <ul className="border-2 border-red-600 hidden sm:flex flex-1 justify-end items-center gap-12 uppercase text-xs">
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Contact</li>
          <button
            type="button"
            className="text-white bg-sky-600 rounded-sm px-7 py-3 uppercase"
          >
            Login
          </button>
        </ul>
        <div className="border-2 border-blue-600 flex sm:hidden flex-1 justify-end ">
          <BsGrid3X3GapFill />
        </div>
      </nav>
    </header>
  );
}
