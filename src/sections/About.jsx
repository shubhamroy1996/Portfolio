import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import FrameWorks from "../components/Frameworks";
import aboutImage from "../assets/coding-pov5.jpg";

import * as logos from "../assets/logos/index";

const About = () => {
  const [currentTime, setcurrentTime] = useState("");
  const grid2Container = useRef();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setcurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src={aboutImage}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 flex flex-col gap-6 max-w-3xl">
            {/* Main Heading */}
            <header>
              <h1 className="headtext text-white">
                Hey, It's me{" "}
                <span
                  className="font-bold"
                  style={{
                    color: "#C3E41D",
                    fontFamily: "'Fira Code', monospace",
                  }}
                >
                  Shubham{" "}
                </span>
              </h1>
            </header>

            {/* Body Content */}
            <div className="subtext text-gray-200 space-y-6 leading-relaxed">
              {/* The Identity Statement */}
              <p className="text-lg">
                With <strong>6+ years of experience</strong>, I specialize in
                building scalable, high-performance web applications within the{" "}
                <strong>React ecosystem</strong>. I leverage tools like{" "}
                <strong>Redux and TanStack</strong> to optimize data flow,
                focusing on clean UI and smooth API integrations to turn complex
                ideas into production-ready products.
              </p>

              {/* The Strategy / Philosophy Block */}
              <div className="flex flex-col gap-4">
                <div className="group">
                  <h3 className="text-white font-bold flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    The Strategy:
                  </h3>
                  <p className="pl-4 border-l border-white/10 italic">
                    I prioritize <strong>maintainable systems</strong> and the
                    "big picture" of app architecture. If a project doesn’t feel
                    fast, look clean, or stay easy to manage months from now, it
                    isn’t finished yet.
                  </p>
                </div>

                {/* Leveling Up Highlight */}
                <div className="pt-3 border-l-4 border-blue-500 pl-4 bg-white/5 rounded-r-lg py-3 mt-2">
                  <p className="text-sm md:text-base">
                    <strong className="text-blue-400 not-italic uppercase tracking-widest text-[10px] block mb-1">
                      Currently Leveling Up:
                    </strong>
                    Mastering <strong>System Design patterns</strong>, Database
                    Architecture, and integrating{" "}
                    <strong>AI-driven workflows</strong> into modern web apps.
                  </p>
                </div>
              </div>

              <p className="text-xs font-light opacity-60">
                The web is always evolving, and I’m right there with it—usually
                breaking things to learn exactly how they work.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image={logos.javscript}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image={logos.react}
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image={logos.tailwindcss}
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative overflow-hidden group p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-neutral-900 to-black h-full">
          {/* 1. Content Layer */}
          <div className="relative z-20 flex flex-col justify-between h-full w-full md:w-[60%]">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                </span>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-500/80">
                  Status:{" "}
                  <span
                    className="font-bold "
                    style={{
                      color: "#C3E41D",
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    Online
                  </span>
                </p>
              </div>

              <h3 className="text-3xl font-bold text-white tracking-tighter">
                Time Zone
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">
                Based in <span className="text-white">India (IST)</span>,
                operating on a{" "}
                <span className="text-cyan-400">Global Schedule</span> to ensure
                seamless collaboration worldwide.
              </p>
            </div>

            {/* 2. Live Digital Clock */}
            <div className="pt-8">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-tighter">
                Current Local Time
              </p>
              <p className="text-4xl font-mono font-bold text-white tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                {currentTime}
              </p>
            </div>
          </div>
          <figure className="absolute -right-20 -top-10 md:-right-10 md:top-0 w-[300px] h-[300px] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none">
            <Globe className="w-full h-full" />
            {/* Subtle radial glow behind the globe */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full"></div>
          </figure>

          {/* 4. Glassmorphism Border Overlay */}
          <div className="absolute inset-0 border border-white/5 rounded-3xl pointer-events-none group-hover:border-cyan-500/20 transition-colors duration-500"></div>
        </div>

        {/* Grid 4 */}
        <div
          className="grid-special-color grid-4"
          id="#about-grid-4"
          data-testid="#about-grid-4"
        >
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Want to get in touch? Let's build something great together!
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-6">
              {/* GitHub Link */}
              <a
                href="https://github.com/shubhamroy1996"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                data-testid="github_btn"
              >
                Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/shubham-kumar-dev-js/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-full md:w-[60%] lg:w-[50%] space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              Tech Stack
            </h3>

            <div className="space-y-4">
              <p className="subtext text-gray-300 leading-relaxed">
                I architect applications using a{" "}
                <strong>type-safe, full-stack approach</strong>. My core toolkit
                is built for performance and long-term scalability:
              </p>

              {/* Visual Tags for Quick Scanning */}
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "Javscript",
                  "React",
                  "TypeScript",
                  "Node.js",
                  "GraphQL",
                  "Redux",
                  "TanStack",
                  "Cypress",
                  "gitHub Copilot",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-cyan-300 backdrop-blur-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-400 italic">
                Focused on building robust systems where data integrity and user
                experience coexist.
              </p>
            </div>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
