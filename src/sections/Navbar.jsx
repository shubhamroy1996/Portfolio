import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "work", name: "Work" },
  { id: "contact", name: "Contact" },
];

function Navigation({ onNavigate }) {
  const handleNavigate = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <ul className="nav-ul">
      {NAV_LINKS.map(({ id, name }) => (
        <li key={id} className="nav-li">
          <button
            onClick={() => handleNavigate(id)}
            className="nav-link border-none bg-none cursor-pointer p-0"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40 pointer-events-none">
      <div className="mx-auto c-space max-w-7xl pointer-events-auto">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            Shubham
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex items-center gap-4">
            <Navigation />
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden pointer-events-auto bg-primary/90"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="pb-5">
              <Navigation onNavigate={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
