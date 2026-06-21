import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* description */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-800 dark:text-zinc-100 tracking-tight leading-tight">
            I am Brian, I live in Orem, originally from Mexico, and I am learning how to build websites.
          </h1>

          <div className="text-base text-zinc-600 dark:text-zinc-400 space-y-6">
            <p>
              I am a software engineering student taking the CS 220 web development course. I started programming out of
              curiosity, and I am currently focusing on frontend development.
            </p>
            <p>
              Lately, I have been figuring out how to structure web pages and trying to understand React. It has been a
              fun challenge learning how to use tools like Next.js and Tailwind CSS to turn designs into working code,
              and I still have a lot to learn, but I try to improve a little bit every day.
            </p>
            <p>
              When I am not studying or doing homework, I like to work on small personal projects, I am excited to keep
              learning and improving my skills!
            </p>
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-8 lg:pl-10">
          <div className="w-full">
            <Image
              src="/portfolio/brian-profile.jpg"
              alt="Portrait of Brian"
              width={500}
              height={500}
              className="rounded-2xl object-cover aspect-square w-full bg-zinc-100 dark:bg-zinc-800"
              priority
            />
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://github.com/elBrianslayers"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
              Follow me on GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/brian-yanez-1392a8339"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Follow me on LinkedIn
            </a>

            <hr className="my-4 border-zinc-200 dark:border-zinc-800" />

            <a
              href="mailto:brd545@ensign.edu"
              className="flex items-center gap-4 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5.25a2 2 0 00-2 2v9.5a2 2 0 002 2h18a2 2 0 002-2v-9.5a2 2 0 00-2-2H3zm17.41 1.5L12 11.238 3.59 6.75h16.82zM2.5 8.164v8.586c0 .276.224.5.5.5h18a.5.5 0 00.5-.5V8.164l-9.04 4.821a1 1 0 01-.92 0L2.5 8.164z"
                />
              </svg>
              brd545@ensign.edu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
