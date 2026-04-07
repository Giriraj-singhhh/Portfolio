"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "C++", "C", "Python"]
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript (Basic)", "Responsive Design"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Bootstrap (Basic)"]
  },
  {
    category: "Databases",
    skills: ["SQLplus", "DBMS"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    category: "Core Concepts",
    skills: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Operating Systems"]
  },
  {
    category: "Other Skills",
    skills: ["API Integration", "Debugging", "Problem Solving"]
  }
];

export default function Skills() {
  return (
    <section className="section container" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-glow responsive-title" style={{ marginBottom: "4rem", textAlign: "center" }}>Core Competencies</h2>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "2rem" 
        }}>
          {skillCategories.map((group, index) => (
            <motion.div
              key={group.category}
              className="glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              style={{ padding: "2rem", display: "flex", flexDirection: "column", height: "100%" }}
            >
              <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem", color: "var(--accent-2)" }}>
                {group.category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    style={{ 
                      fontSize: "0.9rem", 
                      padding: "0.5rem 1rem", 
                      borderRadius: "20px", 
                      background: "rgba(139, 92, 246, 0.1)", 
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                      color: "var(--text-primary)"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
