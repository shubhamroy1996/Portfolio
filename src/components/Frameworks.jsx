import { OrbitingCircles } from "./OrbitingCircles";
import * as logos from "../assets/logos/index";

function FrameWorks() {
  const skills = [
    "react",
    "javascript",
    "typescript",
    "sqlite",
    "css",
    "Redux",
    "visualstudiocode",
    "git",
    "github",
    "Node.js",
    "html5",
    "tailwindcss",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => {
          const logoSrc = logos[skill];
          return <Icon key={index} src={logoSrc} />;
        })}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => {
          const logoSrc = logos[skill.toLowerCase().replace(".", "")];
          return <Icon key={index} src={logoSrc} alt={skill} />;
        })}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-150 rounded-sm hover:scale-110" />
);

export default FrameWorks
