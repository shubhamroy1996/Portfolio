import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#work">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <motion.button
      type="button"
      onClick={handleToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 bg-gradient-to-br from-slate-700 to-slate-900 dark:from-amber-400 dark:to-orange-500 hover:shadow-lg hover:shadow-orange-500/50 dark:hover:shadow-amber-400/50 pointer-events-auto"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300" />
      {isDark ? (
        <Sun className="w-6 h-6 text-amber-300 transition-transform duration-300 rotate-0" />
      ) : (
        <Moon className="w-6 h-6 text-slate-800 transition-transform duration-300 rotate-0" />
      )}
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <div 
      className="fixed inset-x-0 z-20 w-full backdrop-blur-lg pointer-events-none transition-colors duration-300"
      style={{
        backgroundColor: isDark 
          ? "rgba(3, 4, 18, 0.8)" 
          : "rgba(248, 248, 248, 0.8)"
      }}
    >
      <div className="mx-auto c-space max-w-7xl pointer-events-auto">
        <div className="flex items-center justify-between py-2 sm:py-0 pointer-events-auto">
          <a
            href="/"
            className="text-xl font-bold transition-colors duration-300 cursor-pointer pointer-events-auto"
            style={{
              color: isDark ? "#ffffff" : "#1a1a1a"
            }}
          >
            Shubham
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer focus:outline-none sm:hidden pointer-events-auto"
            style={{ color: isDark ? "#a1a1a1" : "#666666" }}
          >
            <img
              src={isOpen ? '../assets/close.svg' : "../assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex items-center gap-8 pointer-events-auto">
            <Navigation />
            <div className="w-px h-6" style={{ backgroundColor: isDark ? "#404040" : "#e0e0e0" }} />
            <ThemeToggle />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden pointer-events-auto"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5 pointer-events-auto flex flex-col items-center gap-4">
            <Navigation />
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
