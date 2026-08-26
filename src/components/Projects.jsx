import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";


const projects = [
  {
    title: "Student Portal",
    image: project1,
    description:
      "A responsive student portal interface with a clean and modern frontend design.",
    tech: ["HTML", "CSS", "JavaScript"],
    github:
      "https://github.com/asmabibi9390-sys/Student-Portal",
  },
  {
    title: "Travel Website",
    image: project2,
    description:
      "An attractive travel website focused on responsive layouts and beautiful UI.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github:
      "https://github.com/asmabibi9390-sys/Travel-website",
  },
  {
    title: "Bootstrap Project",
    image: project3,
    description:
      "A responsive frontend project built using Bootstrap components and custom CSS.",
    tech: ["JavaScript", "CSS", "HTML"],
    github:
      "https://github.com/asmabibi9390-sys/Bootstrap-project",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A modern personal portfolio website built with React and responsive design.",
    tech: ["React.js", "CSS"],
    github:
      "https://github.com/asmabibi9390-sys/PORTFOLIO",
  },
  {
    title: "Event Project",
    image: project5,
    description:
      "A creative event-based frontend project with interactive components.",
    tech: ["React.js", "JavaScript"],
    github:
      "https://github.com/asmabibi9390-sys/Event-project",
  },
  {
    title: "Recipe Finder",
    image: project6,
    description:
      "A responsive recipe finder interface created with modern frontend technologies.",
    tech: ["React.js", "GitHub"],
    github:
      "https://github.com/asmabibi9390-sys/Recipe-finder",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="section-label">My Work</p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-900 dark:text-white">
            A collection of projects I created during my frontend development
            journey.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <article
              key={project.title}
              className="glass-card group overflow-hidden p-0"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-sm font-black text-slate-900 shadow-lg">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-black">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-900 dark:text-white">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-purple-500/10 px-3 py-1 text-sm font-bold text-purple-700 dark:text-purple-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-500 dark:bg-white dark:text-slate-900"
                >
                  <FaGithub />
                  GitHub
                  <FaExternalLinkAlt className="text-xs" />
                </a>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;