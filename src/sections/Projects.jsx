import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { isDark } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing transition-colors duration-300"
      id="work"
      style={{ backgroundColor: isDark ? "#030412" : "#f8f8f8", color: isDark ? "#ffffff" : "#1a1a1a" }}
    >
      <h2 className="text-heading" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>Highlights from recent projects ↓</h2>
      <div style={{ background: isDark ? "linear-gradient(to right, transparent, rgba(115, 115, 115, 0.5), transparent)" : "linear-gradient(to right, transparent, rgba(200, 200, 200, 0.5), transparent)" }} className="mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
