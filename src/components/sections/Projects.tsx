"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

const projects = [
  {
    title: "OCR (Optical Character Recognition System)",
    description: "Developed a system to extract text from images using image processing and Python (OpenCV, Tesseract). Implemented preprocessing techniques to improve accuracy.",
    tags: ["Python", "OpenCV", "Tesseract"],
  },
  {
    title: "Agency Website",
    description: "Designed and developed a responsive website for a digital agency using HTML, CSS, and JavaScript with modern UI/UX principles.",
    tags: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    title: "Student Management System",
    description: "Built a full-featured system using Java with CRUD operations, file handling/database integration, and user-friendly interface.",
    tags: ["Java", "CRUD", "Database"],
  },
  {
    title: "Weather App (API-Based)",
    description: "Created a weather forecasting application using REST APIs to fetch real-time weather data and display dynamic results.",
    tags: ["REST API", "JavaScript", "Frontend"],
  },
  {
    title: "E-Commerce Backend System",
    description: "Designed backend functionalities such as user authentication, product management, and order handling using basic database concepts.",
    tags: ["Backend", "Auth", "Database"],
  }
];

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-glow" style={{ fontSize: "3rem", marginBottom: "4rem", textAlign: "center" }}>Featured Works</h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass interactive"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{ padding: "2rem", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: -50, right: -50, width: 100, height: 100, background: "var(--accent-glow)", filter: "blur(40px)", borderRadius: "50%" }} />
              
              <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
              <p style={{ color: "var(--text-secondary)", flexGrow: 1, marginBottom: "2rem" }}>{project.description}</p>
              
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ fontSize: "0.8rem", padding: "0.4rem 0.8rem", borderRadius: "20px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <a href="#" className="interactive" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--accent-2)" }}>
                  <ExternalLink size={18} /> Live Demo
                </a>
                <a href="#" className="interactive" style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)" }}>
                  <Code size={18} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
