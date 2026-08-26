const skills = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React.js", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
];

function Skills() {
  return (
    <section id="skills" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="section-label">My Expertise</p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            My Skills
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Technologies and tools I use to create modern web experiences.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card group text-center transition duration-300 hover:-translate-y-3"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-500/20 text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-6">
                {skill.icon}
              </div>

              <h3 className="text-lg font-black sm:text-xl">
                {skill.name}
              </h3>
            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
}

export default Skills;