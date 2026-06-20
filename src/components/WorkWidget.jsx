export default function WorkWidget({ title, content, experiences }) {
  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 bg-white dark:bg-zinc-800/50">

      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{content}</p>


      <ol className="flex flex-col gap-6">

        {experiences.map((experience, index) => (
          <li key={index} className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex flex-none items-center justify-center text-[10px] text-zinc-500">
              Logo
            </div>

            {/* job info */}
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {experience.organization}
              </dd>

              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">{experience.jobTitle}</dd>

              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {experience.startYear} — {experience.endYear ? experience.endYear : "Present"}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
