"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2, // wait for preloader
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="section container" style={{ minHeight: "100vh" }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", opacity }}
      >
        <motion.p variants={itemVariants} style={{ color: "var(--accent-2)", fontSize: "1.2rem", marginBottom: "1rem" }}>
          Hi, I am
        </motion.p>
        <motion.h1 
          variants={itemVariants} 
          className="text-glow responsive-title"
          style={{ fontWeight: 900, lineHeight: 1.1, margin: 0, y: y1 }}
        >
          Giriraj Singh <br /> Rathore
        </motion.h1>
        <motion.h2 
          variants={itemVariants}
          className="text-gradient responsive-text"
          style={{ fontWeight: 700, marginTop: "1rem", fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          Creative Developer / Designer
        </motion.h2>
        <motion.div variants={itemVariants} style={{ marginTop: "3rem" }}>
          <p style={{ maxWidth: "500px", color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            I build interactive, immersive, and high-performance digital experiences that bridge the gap between design and engineering.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="interactive"
          variants={itemVariants}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", letterSpacing: "0.1em", marginBottom: "8px" }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{ width: "2px", height: "40px", background: "linear-gradient(to bottom, var(--accent-1), transparent)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
