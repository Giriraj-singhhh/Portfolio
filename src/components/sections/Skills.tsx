"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Three.js / WebGL", level: 70 },
  { name: "Framer Motion", level: 95 },
  { name: "UI/UX Design", level: 80 },
  { name: "Node.js", level: 75 },
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
        
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontWeight: 500, letterSpacing: "1px" }}>{skill.name}</span>
                <span style={{ color: "var(--accent-1)" }}>{skill.level}%</span>
              </div>
              <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                  style={{ height: "100%", background: "linear-gradient(90deg, var(--accent-1), var(--accent-2))", boxShadow: "0 0 10px var(--accent-glow)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
