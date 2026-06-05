"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-12 md:mb-20 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-5xl font-bold font-heading text-slate-200 mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.div 
        initial={{ opacity: 0, w: 0 }}
        whileInView={{ opacity: 1, w: "100%" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"
      />
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}