import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200/50 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#080b1c]/80">

       
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          

          <div>
            <h1 className="text-lg font-black tracking-wide text-slate-900 dark:text-white">
              Asma<span className="text-pink-500">.</span>
            </h1>

            <p className="hidden text-[11px] font-medium text-slate-500 sm:block dark:text-slate-400">
              Frontend Developer
            </p>
          </div>
        </a>

        
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-bold text-slate-700 transition duration-300 hover:bg-purple-500/10 hover:text-purple-600 dark:text-slate-300 dark:hover:text-pink-400"
            >
              {link.name}
            </a>

          ))}


          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-lg text-white shadow-lg transition duration-300 hover:scale-110"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

        </div>

        
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-lg text-white"
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-2xl text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#080b1c]/95 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold text-slate-700 transition hover:bg-purple-500/10 hover:text-purple-600 dark:text-slate-200 dark:hover:text-pink-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;