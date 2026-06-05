"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center justify-center px-6 py-3 glass-card rounded-xl border border-white/5 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(20,184,166,0.2)] transition-all duration-300 cursor-default"
    >
      <span className="text-slate-300 font-medium tracking-wide">{name}</span>
    </motion.div>
  );
}