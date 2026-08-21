import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-pink-200 dark:border-pink-500/20 transition-all duration-500">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#home"
          className="text-2xl font-bold text-pink-500 hover:scale-110 transition-transform duration-300"
        >
          Asma<span className="text-slate-900 dark:text-white">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-slate-700 dark:text-gray-300 hover:text-pink-500 relative after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[2px] after:bg-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          ))}


          <button
            onClick={() => setDarkMode(!darkMode)}
            className="relative w-14 h-7 rounded-full bg-pink-500 p-1 hover:scale-105 transition-all duration-300"
          >
            <span
              className={`flex items-center justify-center w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                darkMode ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {darkMode ? "🌙" : "☀️"}
            </span>
          </button>

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-pink-500"
        >
          ☰
        </button>

      </div>


      {open && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-5 space-y-4 border-t border-pink-500/10">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-slate-700 dark:text-gray-300 hover:text-pink-500"
            >
              {link}
            </a>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-pink-500"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;