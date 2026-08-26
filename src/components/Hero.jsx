import profileImage from "../assets/profile.jpg";
import portfolioData from "../data/portfolio";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-5 pb-20 pt-32 md:px-8"
    >
      
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-purple-500/20 blur-[120px] animate-glow" />

      <div className="pointer-events-none absolute right-0 top-40 h-96 w-96 rounded-full bg-pink-500/20 blur-[130px] animate-glow" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 lg:grid-cols-2">
       
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-300 bg-white/70 px-4 py-2 text-xs font-extrabold text-purple-700 shadow-lg backdrop-blur-xl dark:border-purple-400/20 dark:bg-white/5 dark:text-purple-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Available for Projects
          </div>

          <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-black text-slate-700 dark:text-slate-100 md:text-3xl">
            {portfolioData.role}
          </h2>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-slate-700 dark:text-slate-200 md:text-lg">
            I create modern, responsive and interactive websites with clean
            interfaces and smooth user experiences. I love turning creative
            ideas into beautiful digital experiences.
          </p>

          
          <div className="mt-7 flex flex-wrap gap-2">
            {portfolioData.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-300 bg-white/70 px-3 py-1.5 text-xs font-extrabold text-slate-700 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-pink-400"
              >
                {skill}
              </span>
            ))}
          </div>

         
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 px-7 py-3.5 font-extrabold text-white shadow-xl shadow-purple-500/25 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              View Projects →
            </a>

            <a
              href="/Asma-Bibi-CV.docx"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border-2 border-purple-600 bg-white px-7 py-3.5 font-extrabold text-purple-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-purple-600 hover:text-white dark:border-purple-400 dark:bg-white/5 dark:text-purple-300"
            >
              📄 View CV
            </a>

            
          </div>

          
          <div className="mt-8 flex items-center gap-4">
           
            <a
              href={portfolioData.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white text-blue-700 shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-blue-600 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-blue-400"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current transition group-hover:scale-110"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V8.98h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>
            </a>

            
            <a
              href={portfolioData.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-slate-900 hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current transition group-hover:scale-110"
              >
                <path d="M12 .5C5.65.5.5 5.78.5 12.3c0 5.22 3.29 9.65 7.86 11.21.58.11.79-.26.79-.57v-2.18c-3.2.71-3.88-1.4-3.88-1.4-.53-1.37-1.28-1.74-1.28-1.74-1.05-.74.08-.72.08-.72 1.16.08 1.77 1.23 1.77 1.23 1.03 1.81 2.69 1.29 3.35.99.1-.77.4-1.29.73-1.59-2.55-.3-5.23-1.31-5.23-5.83 0-1.29.45-2.35 1.18-3.18-.12-.3-.51-1.51.11-3.14 0 0 .97-.32 3.17 1.22a10.7 10.7 0 0 1 5.77 0c2.2-1.54 3.17-1.22 3.17-1.22.62 1.63.23 2.84.11 3.14.73.83 1.18 1.89 1.18 3.18 0 4.53-2.69 5.52-5.25 5.82.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.57 4.56-1.56 7.85-5.99 7.85-11.21C23.5 5.78 18.35.5 12 .5Z" />
              </svg>
            </a>
          </div>

          
          <div className="mt-10 flex items-center gap-8">
            <div>
              <p className="text-2xl font-black">2+</p>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Years Experience
              </p>
            </div>

            <div className="h-10 w-px bg-slate-300 dark:bg-white/10" />

            <div>
              <p className="text-2xl font-black">12+</p>
              <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Projects
              </p>
            </div>
          </div>
        </div>

        
        <div className="relative flex min-h-[450px] items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-purple-600/20 blur-[100px] animate-glow" />

          <div className="absolute h-[310px] w-[310px] rounded-full border border-purple-400/20 animate-slow-spin sm:h-[390px] sm:w-[390px]" />

          <div className="absolute h-[230px] w-[230px] rounded-full border border-pink-400/20 animate-slow-spin-reverse sm:h-[300px] sm:w-[300px]" />

         
          <div className="group relative z-10 animate-float">
            <div className="absolute -inset-8 rounded-[45px] bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 opacity-30 blur-3xl transition duration-700 group-hover:opacity-70" />

            <div className="relative h-64 w-64 overflow-hidden rounded-[45px] border border-white/40 bg-white/20 p-4 shadow-2xl backdrop-blur-2xl transition duration-700 group-hover:scale-105 group-hover:rotate-2 dark:border-white/10 dark:bg-white/5 sm:h-80 sm:w-80">
              <img
                src={profileImage}
                alt="Asma Bibi"
                className="h-full w-full rounded-[35px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-black/50 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-white backdrop-blur-xl">
                Asma Bibi
              </div>
            </div>
          </div>

          
          <div className="absolute left-[3%] top-[15%] animate-bounce rounded-2xl border border-orange-400/30 bg-white/80 px-4 py-3 text-sm font-black text-orange-600 shadow-xl backdrop-blur-xl dark:bg-white/5 dark:text-orange-400">
            HTML5
          </div>

          <div className="absolute right-[3%] top-[12%] rounded-2xl border border-yellow-400/30 bg-white/80 px-4 py-3 text-sm font-black text-yellow-600 shadow-xl backdrop-blur-xl dark:bg-white/5 dark:text-yellow-400">
            JS
          </div>

          <div className="absolute bottom-[14%] left-[5%] rounded-2xl border border-cyan-400/30 bg-white/80 px-4 py-3 text-sm font-black text-cyan-600 shadow-xl backdrop-blur-xl dark:bg-white/5 dark:text-cyan-400">
            React
          </div>

          <div className="absolute bottom-[10%] right-[5%] animate-pulse rounded-2xl border border-blue-400/30 bg-white/80 px-4 py-3 text-sm font-black text-blue-600 shadow-xl backdrop-blur-xl dark:bg-white/5 dark:text-blue-400">
            CSS3
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;