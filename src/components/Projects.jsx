import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import { Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Student Portal",
      description:
        "A clean and responsive student portal interface with profile, attendance, timetable, assignments and results sections.",
      image: project1,
      technologies: "HTML • CSS • JavaScript",
      github: "https://github.com/asmabibi9390-sys/Student-Portal",
    },

    {
      title: "Travel Website",
      description:
        "A travel website designed to explore beautiful places in Pakistan with a simple and attractive user interface.",
      image: project2,
      technologies: "HTML • CSS • JavaScript",
      github: "https://github.com/asmabibi9390-sys/Travel-website",
    },

    {
      title: "FORGE Fitness",
      description:
        "A modern gym and fitness website with trainers, workout information and an engaging landing page design.",
      image: project3,
      technologies: "HTML • CSS • JavaScript",
      github: "https://github.com/asmabibi9390-sys/Bootstrap-project",
    },

    {
      title: "Personal Portfolio",
      description:
        "A modern personal portfolio website showcasing frontend development skills, projects and professional information.",
      image: project4,
      technologies: "HTML • CSS • JavaScript",
      github: "https://github.com/asmabibi9390-sys/PORTFOLIO",
    },

    {
      title: "EventHub",
      description:
        "An event management website showcasing upcoming events, categories and a modern responsive interface.",
      image: project5,
      technologies: "HTML • CSS • JavaScript",
      github: "https://github.com/asmabibi9390-sys/Event-project",
    },

    {
      title: "Recipe Finder",
      description:
        "A modern recipe finder application for exploring and searching different recipes.",
      image: project6,
      technologies: "React • Tailwind CSS",
      github: "https://github.com/asmabibi9390-sys/Recipe-finder",
    },
  ];

  return (
    <section
      id="projects"
      className="
        py-24
        px-6
        bg-slate-50
        dark:bg-black
        transition-colors
        duration-500
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-14">
          <p className="text-pink-500 font-semibold tracking-widest">
            MY WORK
          </p>

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-2
              text-slate-900
              dark:text-white
            "
          >
            My <span className="text-pink-500">Projects</span>
          </h2>

          <p className="mt-4 text-slate-600 dark:text-gray-400">
            Some of the projects I have created during my web development
            journey.
          </p>
        </div>

        {/* Projects Grid */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                dark:bg-zinc-950
                rounded-2xl
                overflow-hidden
                border
                border-pink-100
                dark:border-pink-500/20
                shadow-lg
                shadow-pink-500/5
                hover:-translate-y-3
                hover:shadow-2xl
                hover:shadow-pink-500/20
                transition-all
                duration-500
                animate-fadeUp
              "
            >
              {/* Project Image */}

              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-110
                    group-hover:rotate-1
                    transition-all
                    duration-700
                  "
                />

                {/* Pink Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-pink-600/70
                    via-purple-500/10
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                  "
                />
              </div>

              {/* Content */}

              <div className="p-6">
                <h3
                  className="
                    text-xl
                    font-bold
                    text-slate-900
                    dark:text-white
                    group-hover:text-pink-500
                    transition-colors
                    duration-300
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-600
                    dark:text-gray-400
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <p className="mt-4 text-sm font-medium text-pink-500">
                  {project.technologies}
                </p>

                {/* GitHub Button */}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-5
                    px-5
                    py-2.5
                    rounded-full
                    border
                    border-pink-500
                    text-pink-500
                    text-sm
                    font-semibold
                    hover:bg-pink-500
                    hover:text-white
                    hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;