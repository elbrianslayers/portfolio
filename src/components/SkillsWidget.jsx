export default function SkillsWidget({ title, content, skills = [] }) {
  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 bg-white dark:bg-zinc-800/50">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">{content}</p>
      <ul className="flex flex-col gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex flex-none items-center justify-center overflow-hidden">
              {skill.icon ? (
                <img src={skill.icon} alt="" className="w-6 h-6 object-contain" />
              ) : (
                <span className="text-[10px] text-zinc-400">Code</span>
              )}
            </div>
            <div className="flex flex-auto flex-wrap gap-x-2">
              <span className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {skill.name}
              </span>
              <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold">{skill.proficiency}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
