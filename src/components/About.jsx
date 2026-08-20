function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-pink-500 font-semibold mb-2">
          ABOUT ME
        </p>

        <h2 className="text-4xl font-bold mb-8">
          Who <span className="text-pink-500">I Am</span>
        </h2>

        <div className="bg-slate-900 border border-pink-500/10 rounded-2xl p-8
        hover:border-pink-500/40 hover:-translate-y-2
        transition-all duration-500">

          <p className="text-gray-400 leading-8">
            I'm a BS Computer Science student and passionate Frontend
            Developer. I enjoy creating clean, responsive and modern
            web experiences. I have worked with HTML, CSS, JavaScript,
            Bootstrap and I'm currently learning React and Tailwind CSS.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;