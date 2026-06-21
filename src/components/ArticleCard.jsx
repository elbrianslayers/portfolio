export default function ArticleCard({ date, title, content, link }) {
  return (
    <article className="flex flex-col items-start">
      <time className="text-sm text-zinc-400 border-l-2 border-zinc-200 dark:border-zinc-700 pl-3 mb-3">{date}</time>

      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100 mb-2">{title}</h2>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{content}</p>

      <a href={link} className="text-sm text-teal-500 font-medium hover:text-teal-600 transition-colors">
        View project
      </a>
    </article>
  );
}
