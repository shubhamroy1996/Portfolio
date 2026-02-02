import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import frontImage from "../assets/socials/frontImage.webp";
import { FlipWords } from "../components/FlipWords";
import { useTheme } from "../contexts/ThemeContext";

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
      { threshold: 0.1 },
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
  const { isDark } = useTheme();

  const words = ["Secure", "Modern", "Scalable"];

  useEffect(() => {
    // Apply theme to entire body and all sections
    if (isDark) {
      document.body.style.backgroundColor = "#030412";
      document.body.style.color = "#ffffff";
    } else {
      document.body.style.backgroundColor = "#f8f8f8";
      document.body.style.color = "#1a1a1a";
    }
  }, [isDark]);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="w-[full] text-foreground transition-colors duration-300"
      id="home"
      style={{
        backgroundColor: isDark ? "#030412" : "#f8f8f8",
        color: isDark ? "#ffffff" : "#1a1a1a",
      }}
    >
      {/* Hero Section */}
      <main className="relative min-h-screen flex flex-col">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4" data-testid='#name-shubham'>
          <div className="relative text-center">
            <BlurText
              text='Shubham'
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
          onClick={handleScrollToAbout}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-5 h-5 md:w-8 md:h-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-300" />
        </button>
      </main>
    </div>
  );
}
