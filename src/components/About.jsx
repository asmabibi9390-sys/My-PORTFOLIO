function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-pink-500 font-semibold mb-2">
          ABOUT ME
        </p>

        <h2 className="text-4xl font-bold mb-8">
          Who <span className="text-pink-600">I Am</span>
        </h2>

        <div className="bg-slate-900 border border-pink-500/10 rounded-2xl p-8
        hover:border-pink-500/40 hover:-translate-y-2
        transition-all duration-500">

          <p className="text-gray-400 leading-8">
            I’m  Asma Bibi, an aspiring Frontend Developer and Computer Science student. 
            I have learned and worked with HTML, CSS, JavaScript, React, Tailwind CSS, Bootstrap, and Git/GitHub.
             I enjoy creating responsive, user-friendly,and visually appealing websites and 
             continuously improving my skills through hands-on projects and learning.

          </p>

        </div>

      </div>
    </section>
  );
}

export default About;