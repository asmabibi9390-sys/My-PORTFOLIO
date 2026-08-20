function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 px-6 relative overflow-hidden bg-white dark:bg-black transition-colors duration-500"
    >
      {/* PINK GLOW */}
      <div className="absolute w-80 h-80 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-3xl top-20 right-10 animate-pulse" />

      {/* PURPLE GLOW */}
      <div className="absolute w-72 h-72 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl bottom-10 left-10 animate-pulse" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="animate-fadeUp">
          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white">
            Asma{" "}
            <span className="text-pink-500">
              Bibi
            </span>
          </h1>

          {/* WEB FRONT-END DEVELOPER */}
          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-pink-500 cursor-pointer inline-block hover:text-purple-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            Web Front-End Developer
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-600 dark:text-gray-400 mt-6 max-w-lg leading-7">
            I create modern, responsive and user-friendly websites using
            HTML, CSS, JavaScript, Bootstrap, React and Tailwind CSS.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* VIEW MY WORK */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-pink-500 text-white font-medium hover:bg-purple-500 hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300"
            >
              View My Work →
            </a>

            {/* CONTACT ME */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-pink-500 text-pink-500 font-medium hover:bg-pink-500 hover:text-white hover:scale-105 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>

            {/* DOWNLOAD CV */}
            <a
              href="/Asma-Bibi.CV.pdf"
              download="Asma-Bibi.CV.pdf"
              className="px-6 py-3 rounded-full border-2 border-purple-500 text-purple-500 font-medium hover:bg-purple-500 hover:text-white hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              Download CV ↓
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8">
            {/* GITHUB */}
            <a
              href="https://github.com/asmabibi9390-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              title="GitHub"
            >
              Git
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/asma-bibi-931677420"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 font-semibold hover:bg-pink-500 hover:text-white hover:scale-125 hover:-translate-y-1 transition-all duration-300"
              title="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            {/* GLOW */}
            <div className="absolute inset-0 bg-pink-500/20 dark:bg-pink-500/30 blur-3xl rounded-full scale-110" />

            {/* IMAGE */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[5px] bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 shadow-2xl shadow-pink-500/30">
              <img
                src="/src/assets/profile.jpg"
                alt="Asma Bibi"  
                className="w-full h-full object-cover rounded-full border-4 border-white dark:border-black hover:scale-105 hover:rotate-3 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;