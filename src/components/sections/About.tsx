"use client";

import { motion } from "framer-motion";
import { User, Code2, Zap } from "lucide-react";

export default function About() {
  return (
    <section className="section container" id="about">
      <motion.div
        className="responsive-grid"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <div style={{ position: "relative" }}>
          {/* Futuristic Profile Frame */}
          <motion.div 
            className="glass"
            style={{ 
              aspectRatio: "1/1", 
              width: "100%", 
              maxWidth: "400px", 
              margin: "0 auto",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "24px",
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)"
            }}
            whileHover={{ scale: 1.05, rotateY: 15, rotateX: -15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, var(--accent-1), var(--accent-2))", opacity: 0.2, mixBlendMode: "overlay" }} />
            {/* Placeholder image */}
            <User size={120} color="var(--accent-1)" opacity={0.5} />
          </motion.div>
        </div>

        <div>
          <h2 className="text-glow" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>About Me</h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "2rem" }}>
            I am a passionate Computer Science B.Tech student specializing in software engineering and data structures. 
            I blend strong analytical problem-solving with modern frameworks to build robust applications.
          </p>
          
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <div>
              <Code2 className="text-gradient" size={32} style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Engineering</h3>
              <p style={{ color: "var(--text-secondary)" }}>Building scalable architectures with modern web tech.</p>
            </div>
            <div>
              <Zap className="text-gradient" size={32} style={{ marginBottom: "1rem" }} />
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Problem Solving</h3>
              <p style={{ color: "var(--text-secondary)" }}>Applying DSA and logical thinking to optimize system architectures.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
