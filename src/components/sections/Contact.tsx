"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Share2, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section className="section container" id="contact" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
      <motion.div
        className="glass responsive-padding"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%", maxWidth: "600px", textAlign: "center", position: "relative", overflow: "hidden", paddingLeft: "2rem", paddingRight: "2rem" }}
      >
        <div style={{ position: "absolute", bottom: -100, left: -100, width: 200, height: 200, background: "var(--accent-2)", filter: "blur(80px)", borderRadius: "50%", opacity: 0.2 }} />
        
        <h2 className="text-glow responsive-title" style={{ marginBottom: "1rem" }}>Let&apos;s Talk</h2>
        <p className="responsive-text" style={{ color: "var(--text-secondary)", marginBottom: "3rem" }}>
          Ready to build something extraordinary? Drop me a message and let&apos;s create the future together.
        </p>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");
            
            const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
            const body = encodeURIComponent(`Message: ${message}\n\nSender Email: ${email}`);
            
            // Replace with your actual email address here before deployment
            window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}
        >
          <input 
            type="text" 
            name="name"
            required
            placeholder="Your Name" 
            className="interactive"
            style={{ padding: "1rem", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", outline: "none", transition: "border-color 0.3s", width: "100%" }}
            onFocus={(e) => e.target.style.borderColor = "var(--accent-1)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <input 
            type="email" 
            name="email"
            required
            placeholder="Your Email" 
            className="interactive"
            style={{ padding: "1rem", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", outline: "none", transition: "border-color 0.3s", width: "100%" }}
            onFocus={(e) => e.target.style.borderColor = "var(--accent-1)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <textarea 
            name="message"
            required
            placeholder="Your Message" 
            rows={4}
            className="interactive"
            style={{ padding: "1rem", background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "white", outline: "none", transition: "border-color 0.3s", width: "100%", resize: "none" }}
            onFocus={(e) => e.target.style.borderColor = "var(--accent-1)"}
            onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
          />
          <button 
            type="submit"
            className="interactive"
            style={{ padding: "1rem", background: "linear-gradient(45deg, var(--accent-1), var(--accent-2))", border: "none", borderRadius: "8px", color: "white", fontWeight: "bold", fontSize: "1.1rem", marginTop: "1rem", cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
          {[Globe, MessageCircle, Share2, Mail].map((Icon, i) => (
            <motion.a 
              key={i} 
              href="#" 
              className="interactive text-glow"
              whileHover={{ scale: 1.2, color: "var(--accent-1)" }}
              style={{ color: "var(--text-secondary)", transition: "color 0.3s" }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
