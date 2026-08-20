function Experience() {
  return (
    <section id="experience" className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p className="text-pink-500 font-semibold">
            EXPERIENCE
          </p>

          <h2 className="text-4xl font-bold mt-2">
            My <span className="text-pink-500">Journey</span>
          </h2>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800
        hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10
        transition-all duration-500">

          <div className="flex flex-col md:flex-row md:justify-between gap-3">

            <div>
              <h3 className="text-2xl font-bold text-white">
                Web Development Intern
              </h3>

              <p className="text-pink-500 mt-1">
                Encova — Virtual
              </p>
            </div>

            <span className="text-gray-500">
              2026
            </span>

          </div>

          <p className="text-gray-400 leading-7 mt-5">
            Working on frontend development and learning HTML, CSS,
            JavaScript, Git, GitHub, React and modern web development
            practices.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Experience;