import { mySocials } from "../constants";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm transition-colors duration-300 c-space" style={{ color: isDark ? "#a1a1a1" : "#666666" }}>
      <div style={{ background: isDark ? "linear-gradient(to right, transparent, rgba(115, 115, 115, 0.5), transparent)" : "linear-gradient(to right, transparent, rgba(200, 200, 200, 0.5), transparent)" }} className="mb-4 h-[1px] w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} rel="noopener noreferrer" target="_blank">
            <img src={social.icon} className="w-5 h-5" alt={social.name} style={{ opacity: isDark ? 1 : 0.7 }} />
          </a>
        ))}
      </div>
      <p>© 2026 Shubham. All rights reserved.</p>
    </section>
  );
};

export default Footer;
