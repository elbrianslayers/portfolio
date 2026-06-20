export default function Navbar({ options = [] }) {
  return (
    <nav className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
      <ul className="flex space-x-6">
        {options.map((option, index) => (
          <li key={index}>
            <a
              href={option.path}
              className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            >
              {option.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
