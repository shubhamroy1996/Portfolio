import * as Icons from '../assets/socials/index'
import * as Project from "../assets/projects/index"
import * as Logos from '../assets/logos/index'


export const myProjects = [
  {
    id: 1,
    title: "Swiggy Clone",
    description:
      "Its a comprehensive config-driven UI project focused on replicating the core features of the Swiggy food delivery platform.",
    subDescription: [
      "Built using React.js, Redux, Tailwind CSS, and Webpack, the application leverages the Swiggy API to dynamically display restaurant",
      "Listings and menus based on the searched location, providing a realistic user experience.",
    ],
    href: "https://swiggy-clone-git-main-shubhamroy1996s-projects.vercel.app/",
    logo: "",
    image: Project.swiggy,
    tags: [
      {
        id: 1,
        name: "React",
        path: Logos.react,
      },
      {
        id: 2,
        name: "Redux",
        path: Logos.redux
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: Logos.tailwindcss
      },
      {
        id: 4,
        name: "Vite",
        path: Logos.vitejs
      },
    ],
  },
  {
    id: 2,
    title: "Tourvisto",
    description:
      "Travel platform with Admin Dashboard using React Router & TypeScript with AI itineraries.",
    subDescription: [
      "Integrates Gemini AI to transform user preferences into detailed travel plans in seconds.",
      "Developed with TypeScript to ensure reliable data flow across complex dashboard widgets and user states.",
    ],
    href: "",
    logo: "",
    image: Project.tourvisto,
    tags: [
      {
        id: 1,
        name: "Typescript",
        path: Logos.typescript,
      },
      {
        id: 2,
        name: "React",
        path: Logos.react
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: Logos.tailwindcss
      },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: ".NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "SQLite",
        path: "/assets/logos/sqlite.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Netflix-GPT",
    description:
      "-----------------------------------------------.",
    subDescription: [
      "WILL ADD LATERON",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "C++",
        path: "/assets/logos/cplusplus.svg",
      },
      {
        id: 2,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 3,
        name: "Git",
        path: "/assets/logos/git.svg",
      },
      {
        id: 4,
        name: "Microsoft",
        path: "/assets/logos/microsoft.svg",
      },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML5",
        path: "/assets/logos/html5.svg",
      },
      {
        id: 3,
        name: "CSS3",
        path: "/assets/logos/css3.svg",
      },
      {
        id: 4,
        name: "Vite.js",
        path: "/assets/logos/vitejs.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      {
        id: 1,
        name: "Blazor",
        path: "/assets/logos/blazor.svg",
      },
      {
        id: 2,
        name: "Azure",
        path: "/assets/logos/azure.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: Icons.whatsApp
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/shubham-kumar-096630159/",
    icon: Icons.linkedin,
  },
  {
    name: "Instagram",
    icon: Icons.instagram
  },
];

export const experiences = [
  {
    title: "Software Engineer Analyst",
    job: "Insurance Domain",
    date: "2019-2022",
    contents: [
      "✅ Built end-to-end test automation for a React web app using CodeceptJS and TypeScript, covering complex insurance workflows (quoting, claims).",
      "✅ Authored 300+ BDD/TDD Gherkin scenarios, improving requirement traceability and business–engineering collaboration",
      "✅ Led automation framework migration to TypeScript, introducing type-safe interfaces adopted by 15+ cross-functional teams",
      "✅ Developed scalable RESTful APIs with Node.js and Express to support high-volume data exchange between underwriting engines and UI."
    ],
  },
  {
    title: "Software Eng Sr. Analyst",
    job: "Demand & Supply Chain Domain",
    date: "2022-2025",
    contents: [
      "✅Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "✅ Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Software Eng 1",
    job: "Audit-Tax Domain",
    date: "2025-Present",
    contents: [
      "✅ Engineered core features for a large-scale Audit Management platform", 
      "✅ Developed TypeScript modules to fetch and render 3-5 years of historical audit data via REST APIs.",
      "✅ Deployed AI-driven validation tools that identify reporting errors and omissions in real-time", 
      "✅ Utilize MongoDB for data persistence and Datadog to monitor feature performance and reliability.",
    ],
  },
];
export const reviews = [
  {
    name: "Ebony",
    username: "@ebony",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Sunanda",
    username: "@Sunanda",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "K.Koli",
    username: "@koli.k",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "T.k.",
    username: "@t.kali",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Prava",
    username: "@k.prava",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Jonnis",
    username: "@Jonnis",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
