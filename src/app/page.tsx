import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer style={{ padding: "2rem", textAlign: "center", color: "var(--text-secondary)", borderTop: "1px solid var(--glass-border)", background: "rgba(0,0,0,0.5)" }}>
        <p>© {new Date().getFullYear()} Giriraj Singh Rathore. All rights reserved.</p>
        <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>Designed with precision. Built for the future.</p>
      </footer>
    </main>
  );
}
