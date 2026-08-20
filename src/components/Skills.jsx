const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Bootstrap", icon: "🅱️" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind CSS", icon: "🌊" },
  { name: "Git", icon: "🔧" },
  { name: "GitHub", icon: "🐙" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/40">

      <div className="max-w-6xl mx-auto text-center">

        <p className="text-pink-500 font-semibold">
          MY SKILLS
        </p>

        <h2 className="text-4xl font-bold mt-2 mb-12">
          Technologies I <span className="text-pink-500">Use</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-7
              hover:border-pink-500 hover:-translate-y-3
              hover:shadow-xl hover:shadow-pink-500/10
              transition-all duration-500 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-gray-200 group-hover:text-pink-400 transition">
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