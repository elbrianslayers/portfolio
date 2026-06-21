export const metadata = {
  title: "Portfolio - Uses",
  description: "The uses page of my portfolio.",
};

export default function Uses() {
  // 1. local data base
  const toolCategories = [
    {
      groupName: "Workstation",
      items: [
        {
          title: "MacBook Air M2",
          description:
            "My daily driver for school, it handles all my coding assignments, compiles fast, and never overheats even when I have way too many browser tabs open.",
        },
      ],
    },
    {
      groupName: "Development tools",
      items: [
        {
          title: "VS Code & GitHub Codespaces",
          description:
            "My primary code editors. GitHub Codespaces has been a lifesaver in CS 220, letting me code right in the browser without any setup headaches.",
        },
      ],
    },
    {
      groupName: "Design and Frameworks",
      items: [
        {
          title: "Figma",
          description:
            "Where I look at the designs before writing any code, it really helps me visualize the layout and spacing to get my CSS right.",
        },
        {
          title: "Next.js & Tailwind CSS",
          description:
            "The exact tools I used to build this portfolio! Tailwind makes styling fast, and Next.js keeps all my React components organized.",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        {/* header Section */}
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software I use, gear I rely on for school and coding, and other things I recommend.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            As a student getting into web development, I am discovering new tools. Here is a list of the software,
            hardware, and frameworks I use every day to build projects and try to survive my CS 220 course.
          </p>
        </header>

        {/* List Section */}
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {toolCategories.map((category, index) => (
              <section key={index} className="md:grid md:grid-cols-4 md:items-baseline">
                {/* left column category tittle */}
                <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 md:col-span-1">
                  {category.groupName}
                </h2>

                {/* tools list right comlumn */}
                <div className="md:col-span-3 md:border-l md:border-zinc-100 md:dark:border-zinc-800 md:pl-6 mt-6 md:mt-0 space-y-16">
                  {toolCategories[index].items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group relative flex flex-col items-start">
                      <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
