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
  // {
  //   id: 3,
  //   title: "Blazor Web App",
  //   description:
  //     "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
  //   subDescription: [
  //     "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
  //     "Implemented API interactions using .NET Core for a robust backend.",
  //     "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
  //     "Integrated SQLite for efficient client-side database storage.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/blazor-app.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: ".NET Core",
  //       path: "/assets/logos/dotnetcore.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "SQLite",
  //       path: "/assets/logos/sqlite.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Coming soon...",
    description:
      "-----------------------------------------------.",
    subDescription: [
      "----------------------------------",
      // "Developed a physics engine with collision detection and particle effects.",
      // "Implemented a scripting system for easy game customization.",
      // "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
    //   {
    //     id: 1,
    //     name: "C++",
    //     path: "/assets/logos/cplusplus.svg",
    //   },
    //   {
    //     id: 2,
    //     name: "C#",
    //     path: "/assets/logos/csharp.svg",
    //   },
    //   {
    //     id: 3,
    //     name: "Git",
    //     path: "/assets/logos/git.svg",
    //   },
    //   {
    //     id: 4,
    //     name: "Microsoft",
    //     path: "/assets/logos/microsoft.svg",
    //   },
    ],
  },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: import.meta.env.VITE_WHATSAPP_LINK,
    icon: Icons.whatsApp,
  },
  {
    name: "Linkedin",
    href: import.meta.env.VITE_LINKEDIN_ID,
    icon: Icons.linkedin,
  },
  {
    name: "Gmail",
    href: import.meta.env.VITE_EMAIL_ID,
    icon: Icons.gmail
  },
];

export const experiences = [
  {
    title: "Software Engineer Analyst",
    job: "Insurance Domain",
    date: "2019-2022",
    contents: [
      "✅ Built e2e test automation for a React web app using Gherkin and Javascript, covering complex insurance workflows (quoting, claims).",
      "✅ Authored 300+ BDD/TDD Gherkin scenarios, improving requirement traceability and business–engineering collaboration.",
      "✅ Led automation framework migration to TypeScript, introducing type-safe interfaces adopted by 15+ cross-functional teams.",
      "✅ Developed scalable RESTful APIs with Node.js and Express to support high-volume data exchange between underwriting engines and UI."
    ],
  },
  {
    title: "Software Eng Sr. Analyst",
    job: "Demand & Supply Chain Domain",
    date: "2022-2025",
    contents: [
      "✅ Prioritized and resolved product defects to improve system stability and reliability.",
      "✅ Designed and implemented enhancements to offset navigation, significantly reducing processing latency and improving user experience.",
      "✅ Delivered new product features in alignment with business and technical requirements.",
      "✅ Enhanced dashboard functionality to enable seamless data visualization and optimized data loading performance.",
      "✅ Enhanced a demand forecasting system leveraging SKU-level analysis to support data-driven planning and decision-making.",
    ],
  },
  {
    title: "Software Eng 1",
    job: "Audit-Tax Domain",
    date: "2025-Present",
    contents: [
      "✅ Engineered core features using a micro-frontend (MFE) architecture for large-scale B2B data products.", 
      "✅ Developed TypeScript modules to efficiently fetch, process, and render historical audit data for corporate tax departments.",
      "✅ Collaborated with cross-functional teams to build and validate LLM-powered tools that detect audit anomalies and omissions in real time.", 
      "✅ Optimized and enhanced product APIs to handle high-volume requests, reducing latency through caching strategies and gRPC integration.",
    ],
  },
];
export const reviews = [
  {
    name: "Ebony",
    username: "@ebony",
    body: "The improvements delivered significantly reduced delays in our workflows. Navigation is smoother, dashboards load faster, and the system feels far more reliable.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Sunanda",
    username: "@Sunanda",
    body: "Complex supply chain requirements were translated into practical, high-quality features that directly supported our demand planning and forecasting needs.",
    img: "https://robohash.org/jill",
  },
  {
    name: "K.Koli",
    username: "@koli.k",
    body: "Performance optimizations made a noticeable difference. Data-heavy operations are faster and more responsive, even during peak usage.",
    img: "https://robohash.org/john",
  },
  {
    name: "T.k.",
    username: "@t.kali",
    body: "The micro-frontend features were delivered with great attention to scalability and usability, helping our B2B platform evolve without disruption.",
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
    body: "Audit and historical tax data is now easier to access and understand, which has greatly improved our team’s efficiency and decision-making",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "API enhancements and caching improvements led to faster response times and better reliability under high request volumes.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "A strong engineering partner who understands business impact and consistently delivers solutions that improve performance and user experience.",
    img: "https://robohash.org/eve",
  },
];
