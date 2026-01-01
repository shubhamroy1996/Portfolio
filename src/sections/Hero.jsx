import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import frontImage from "../assets/socials/shubham.jpg";
import HeroText from "../components/HeroText";
import { FlipWords } from "../components/FlipWords";
import ParallaxBackground from "../components/parallaxBackground";

// Inline Button component
const Button = React.forwardRef(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
const BlurText = ({
  text = "",
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style = {},
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView
              ? "translateY(0)"
              : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function Hero() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const words = ["Secure", "Modern", "Scalable"];

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const menuItems = [
    { label: "HOME", href: "#", highlight: true },
    { label: "ABOUT", href: "#" },
    { label: "PROJECTS", href: "#" },
    { label: "EXPERIENCE", href: "#" },
    { label: "EDUCATION", href: "#" },
    { label: "WRITING", href: "#" },
    { label: "CONTACT", href: "#" },
  ];

  return (
    <div
      className="w-[full] text-foreground transition-colors"
      style={{
        backgroundColor: isDark ? "#030412" : "hsl(0 0% 98%)",
        color: isDark ? "hsl(0 0% 100%)" : "hsl(0 0% 10%)",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
        <nav className="flex items-center justify-between max-w-screen-2xl mx-auto pointer-events-auto">
          <ParallaxBackground />
          {/* <div className="relative">
            <button
              ref={buttonRef}
              type="button"
              className="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute top-full left-0 w-[200px] md:w-[240px] border-none shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100]"
                style={{ backgroundColor: isDark ? "hsl(0 0% 0%)" : "hsl(0 0% 98%)" }}
              >
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 cursor-pointer transition-colors duration-300"
                    style={{ color: item.highlight ? "#C3E41D" : (isDark ? "white" : "black") }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div> */}

          <div className="text-4xl" style={{ fontFamily: "cursive" }}></div>

          <button
            type="button"
            onClick={toggleTheme}
            className="relative w-16 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800"
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full transition-transform duration-300 bg-black dark:bg-white ${
                isDark ? "translate-x-8" : "translate-x-0"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4">
          <div className="relative text-center">
            <BlurText
              text="Shubham"
              delay={100}
              animateBy="letters"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            />
            <BlurText
              text="Kumar"
              delay={100}
              animateBy="letters"
              className="font-bold text-[100px] sm:text-[140px] md:text-[180px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center"
              style={{ color: "#C3E41D", fontFamily: "'Fira Code', monospace" }}
            />

            {/* Profile Picture */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[65px] h-[110px] sm:w-[90px] sm:h-[152px] md:w-[110px] md:h-[185px] lg:w-[129px] lg:h-[218px] rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <img
                  //src="https://i.postimg.cc/y8DnKLyK/albert-dera-ILip77-Sbm-OE-unsplash.jpg"
                  src={frontImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" absolute bottom-16 sm:bottom-18 md:bottom-23 lg:bottom-26 xl:bottom-26 left-1/2 -translate-x-1/2 w-full px-6">
          <div className="flex justify-center">
            {/* <BlurText
              text="A Developer Dedicated to Crafting "
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
             */}
            <BlurText
              text="A Developer Dedicated to Crafting "
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-500 hover:text-black dark:hover:text-white"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />

            <FlipWords
              words={words}
              // Updated Tailwind Classes: font-bold, text-white, and dark mode support
              //className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold text-white dark:text-white"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center transition-colors duration-300 text-neutral-100 hover:text-black dark:hover:text-white"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />

            <BlurText
              text=" web-applications"
              delay={500}
              animateBy="words"
              direction="top"
              className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-neutral-500 transition-colors duration-300"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>
        </div>

        <button
          type="button"
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
        </button>
      </main>
    </div>
  );
}
