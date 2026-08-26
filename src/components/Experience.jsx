function Experience() {
  return (
    <section id="experience" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="section-label">My Journey</p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Experience
          </h2>
        </div>

        <div className="relative mt-14 border-l-2 border-purple-500/30 pl-8 md:pl-12">

          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg shadow-pink-500/50" />

          <div className="glass-card">

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <h3 className="text-2xl font-black">
                Frontend Developer
              </h3>

              <span className="w-fit rounded-full bg-purple-500/10 px-4 py-2 text-sm font-black text-purple-700 dark:text-purple-300">
                2 Years Experience
              </span>

            </div>

            <p className="mt-5 text-lg leading-8 text-slate-900 dark:text-white">
              During my learning and development journey, I have created
              responsive websites and frontend projects using HTML5, CSS3,
              Bootstrap, JavaScript and React.js.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="skill-pill">Responsive Design</span>
              <span className="skill-pill">React Projects</span>
              <span className="skill-pill">UI Development</span>
              <span className="skill-pill">Git & GitHub</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;