import Image from "next/image";

export default function Projects() {
  // my projects
  const projects = [
    {
      name: "React Components and Widgets",
      description:
        "A few different react components I made for class. It includes things like a navigation bar, a signup form, and widgets to show my skills and work experience.",
      link: "https://github.com/Ensign-College/cs220-cc-09-elbrianslayers",
      logo: "/react-icon.png",
    },
    {
      name: "Dark Mode Theme Switcher",
      description:
        "A simple button that lets you switch a website between light and dark mode. This assignment helped me figure out how to use React state and Tailwind CSS together.",
      link: "https://github.com/Ensign-College/cs220-cc-16-elbrianslayers.git",
      logo: "/react-icon.png",
    },
    {
      name: "JavaScript Taxes Challenge",
      description:
        "One of my first JavaScript challenges. It calculates taxes based on different variables. It was really good practice for learning basic JavaScript logic and working with arrays.",
      link: "https://github.com/Ensign-College/cs220-cc-04-elbrianslayers",
      logo: "/js-icon.png",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* tittle and intro */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Some of the projects I have built while learning to code.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am currently taking the CS 220 Web Development class, and these are some of the assignments I have been
            working on. I have been learning how to go from basic HTML and JavaScript to building actual interfaces
            using React and Tailwind CSS.
          </p>
        </div>

        {/* figma design */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="group relative flex flex-col items-start">
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
              </div>

              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">{project.name}</h2>

              <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>

              <p className="relative z-10 mt-6 flex items-center text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <svg
                  className="h-5 w-5 flex-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span className="ml-2">{project.link.replace("https://", "")}</span>
              </p>

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
                <span className="sr-only">View project {project.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
