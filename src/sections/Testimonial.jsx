import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";
import { useTheme } from "../contexts/ThemeContext";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  const { isDark } = useTheme();
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 hover-animation transition-all duration-300"
      )}
      style={{
        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(26,26,26,0.1)",
        background: isDark 
          ? "linear-gradient(to right, #1f1e39, #282b4b)"
          : "linear-gradient(to right, #f0f0f0, #e8e8e8)",
      }}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt=""
          src={img}
          style={{ backgroundColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(26,26,26,0.1)" }}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>
            {name}
          </figcaption>
          <p className="text-xs font-medium" style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(26,26,26,0.4)" }}>{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm" style={{ color: isDark ? "#d4d4d8" : "#4b5563" }}>{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  const { isDark } = useTheme();
  return (
    <div className="items-start mt-25 md:mt-35 c-space transition-colors duration-300" style={{ backgroundColor: isDark ? "#030412" : "#f8f8f8", color: isDark ? "#ffffff" : "#1a1a1a" }}>
      <h2 className="text-heading" style={{ color: isDark ? "#ffffff" : "#1a1a1a" }}>Hear From My Clients</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
