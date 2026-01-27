import React, { lazy, Suspense } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
const Projects = lazy(() => import("./sections/Projects"));
const Experiences = lazy(() => import("./sections/Experiences"));
const Testimonial = lazy(() => import("./sections/Testimonial"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));
import { Loader2 } from "lucide-react";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl pointer-events-auto">
      <Navbar />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
      />
      <Hero />
      <About />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Projects />
        <Experiences />
        <Testimonial />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
