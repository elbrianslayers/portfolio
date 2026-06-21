import Image from "next/image";
import ArticleCard from "../components/ArticleCard";
import SignupWidget from "../components/SignupWidget";
import WorkWidget from "../components/WorkWidget";
import SkillsWidget from "../components/SkillsWidget";

export default function Home() {
  const experiences = [
    { organization: "CS 220 Fronted Fundamentals", jobTitle: "Student and Learner", startYear: "May - June 2026", endYear: null },
    { organization: "My Bedroom Desk", jobTitle: "Self Taught Coder", startYear: "May - June 2026", endYear: null },
  ];

  const skills = [
  { name: "HTML and CSS", proficiency: "30%", icon: "/portfolio/html-icon.png" },
  { name: "JavaScript", proficiency: "28%", icon: "/portfolio/js-icon.png" },
  { name: "React.js", proficiency: "20%", icon: "/portfolio/react-icon.png" },
];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-16">
        {/* presentation */}
        <section className="max-w-2xl mb-24">
          <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md mb-8 bg-zinc-200 flex items-center justify-center">
            <img src="/portfolio/brian-profile.jpg" alt="Brian" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Hey, I am Brian, I am learning to code and build websites.
          </h1>
          <p className="text-base text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            I am a student currently completing my CS 220 web development course in this block May - June 2026. I am focusing on
            learning frontend foundations, figuring out how to structure web pages, and building my very first user
            interfaces using React.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/elbrianslayers"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brian-yanez-1392a8339"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 dark:text-zinc-100 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* main section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* left column */}
          <div className="flex flex-col gap-16">
            <ArticleCard
              date="June 15, 2026"
              title="Building my first Portfolio with Next.js"
              content="In my final CS 220 assignment, I gathered all the React components I built throughout the first block and unified them into a single, clean layout using Next.js."
              link="https://github.com/Ensign-College/cs-220-portfolio-v3-elbrianslayers"
            />
            <ArticleCard
              date="May 30, 2026"
              title="Creating Interactive React Components"
              content="I learned how to break down a webpage into reusable pieces, building a dynamic Navbar, a Dropdown menu, and a theme switcher to handle dark mode using React state."
              link="https://github.com/Ensign-College/cs220-cc-16-elbrianslayers"
            />

            <ArticleCard
              date="May 16, 2026"
              title="Mastering DOM Events and Arrays"
              content="I learned how to manipulate the DOM using JavaScript. I practiced creating event listeners and modifying array data structures to make dynamic web pages."
              link="https://github.com/Ensign-College/cs220-cc-09-elbrianslayers"
            />

            <ArticleCard
              date="May 9, 2026"
              title="JavaScript Foundations and Problem Solving"
              content="My very first steps into programming! I learned about variables, data types, and objects, and wrote scripts to automate tasks like calculating sales taxes for a shopping cart."
              link="https://github.com/Ensign-College/cs220-cc-04-elbrianslayers"
            />
          </div>

          {/* right column */}
          <div className="flex flex-col gap-10">
            <SignupWidget
              title="Want to follow my journey?"
              content="Drop your email below if you want to see what project I build next!"
            />
            <WorkWidget
              title="Experience"
              content="Where I have been spending my time since May 2026."
              experiences={experiences}
            />
            <SkillsWidget
              title="My Toolbox"
              content="The tech foundations I have been learning in CS 220."
              skills={skills}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
