function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-label">About Me</p>

        <div className="mt-5 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              More than code.
              <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                It's about experience.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 dark:text-slate-200">
              I'm Asma Bibi, a passionate frontend developer who enjoys
              creating modern, responsive and user-friendly websites.
            </p>
          </div>

          <div className="glass-card">
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              I focus on creating clean interfaces, attractive designs and
              smooth user experiences. I enjoy transforming ideas into
              functional and visually appealing websites.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              My frontend toolkit includes HTML5, CSS3, Bootstrap, JavaScript,
              React.js, Tailwind CSS, Git and GitHub.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;