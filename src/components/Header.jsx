import { useTheme } from "../contexts/ThemeContext";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto pointer-events-auto">
        <div className="text-10xl" style={{ fontFamily: "cursive" }}></div>

        <button
          type="button"
          onClick={toggleTheme}
          className="relative w-16 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300"
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 bg-black dark:bg-white ${
              isDark ? "translate-x-8" : "translate-x-0"
            }`}
          />
        </button>
      </nav>
    </header>
  );
}
