import Image from "next/image";
import { ButtonApp } from "./buttonApp";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full bg-[#121113] border-b border-[#2a282c] text-white px-4 py-3 shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center gap-4 cursor-pointer">
            <Image
              src="/logo-cubo.png"
              alt="Logo Cubos"
              width={130}
              height={130}
            />
            <span className="font-semibold text-white text-lg font-inter">
              Movies
            </span>
          </div>
        </Link>

        {/* Ações: tema + logout */}
        <div className="flex items-center gap-2 bg-[#B744F714]">
          <button
            // onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-[#B744F714] p-2 rounded hover:opacity-90 transition cursor-pointer"
            aria-label="Toggle theme"
          >
            <Image
              src={"./Sun_fill.svg"}
              alt="Toggle theme"
              width={22}
              height={30}
            />
            {/* {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} */}
          </button>
          <ButtonApp>Logout</ButtonApp>
        </div>
      </div>
    </header>
  );
};
