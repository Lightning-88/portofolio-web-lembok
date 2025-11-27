import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="fixed shadow-lg shadow-shadow-black h-14 px-4 w-full md:px-16">
      <nav className="flex justify-between items-center h-full mx-auto max-w-screen-xl">
        <div className="flex">
          <Link to="/">
            <h1 className="font-bold">
              Lembok<span className="text-green-600">Chess</span>
            </h1>
          </Link>
        </div>

        <div
          className={`flex flex-col h-full w-64 fixed right-0 top-0 bg-bg-pri pt-4 p-4 z-50 bg-stone-800 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:flex-row md:h-auto md:w-auto md:static md:right-auto md:top-auto md:p-0 md:translate-none md:bg-inherit md:transition-none`}
        >
          <button
            className="flex justify-between items-center mb-8 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <Link to="/">
              <h1 className="font-bold">
                Lembok<span className="text-green-600">Chess</span>
              </h1>
            </Link>
            <X />
          </button>
          <div className="flex flex-col space-y-4 md:flex-row md:gap-6 md:space-y-0">
            <Link to="index.html" className="inline w-fit hover:text-green-600">
              Home
            </Link>
            <Link to="" className="inline w-fit hover:text-green-600">
              Profile
            </Link>
            <Link to="" className="inline w-fit hover:text-green-600">
              Games
            </Link>
            <Link to="" className="inline w-fit hover:text-green-600">
              Contact
            </Link>
          </div>
        </div>

        <button className="flex md:hidden" onClick={() => setIsOpen(true)}>
          <Menu />
        </button>
      </nav>
    </header>
  );
}
