export default function SignupWidget({ title, content }) {
  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 bg-white dark:bg-zinc-800/50">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h2>

      {/* description */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{content}</p>

      <div className="flex gap-3">
        <input
          type="email"
          placeholder="Email address"
          className="flex-auto rounded-md border border-zinc-900/10 dark:border-zinc-700 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none dark:text-zinc-200"
        />
        <button className="flex-none rounded-md bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 px-4 py-2 text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition">
          Join
        </button>
      </div>
    </div>
  );
}
