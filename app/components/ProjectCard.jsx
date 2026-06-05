"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

export default function ProjectCard({ title, description, highlights, techStack, index, liveUrl, githubUrl, notice }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* --- COMPACT GRID CARD --- */}
      <motion.div
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="glass-card rounded-xl overflow-hidden group border border-white/5 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full bg-surface/40 hover:bg-surface/60 hover:shadow-2xl hover:shadow-primary/5 cursor-pointer"
      >
        <div className="h-24 bg-slate-800/80 relative overflow-hidden flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent mix-blend-overlay z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
           <span className="text-slate-400 font-medium tracking-widest uppercase z-0 text-[10px] flex items-center gap-2 group-hover:text-primary transition-colors">
             Click to Expand
           </span>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-lg font-bold text-slate-100 mb-2 font-heading group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          
          <p className="text-slate-400 mb-4 leading-relaxed text-xs line-clamp-3">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-auto">
            {techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[10px] font-medium text-teal-300 bg-teal-500/10 rounded-md border border-teal-500/20">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-0.5 text-[10px] font-medium text-slate-500 bg-slate-800/50 rounded-md border border-white/5">
                +{techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-white/5">
            <span className="text-xs font-semibold text-primary flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              View Full Details <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </motion.div>

      {/* --- FULL SCREEN MODAL --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] overflow-y-auto flex justify-center items-start pt-10 pb-10 sm:pt-20 sm:pb-20 px-4">
            
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content Card — removed stopPropagation from here */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 mt-auto mb-auto"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4 font-heading pr-8">
                {title}
              </h3>
              
              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                {description}
              </p>

              {/* Password/Notice Box */}
              {notice && (
                <div className="mb-6 p-4 bg-teal-500/10 border border-teal-500/30 rounded-lg flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold shrink-0">
                    !
                  </span>
                  <p className="text-teal-100 text-sm font-medium tracking-wide">
                    {notice.includes("'bodroy'") ? (
                      <>
                        {notice.split("'bodroy'")[0]}
                        <span className="text-white font-bold bg-teal-600/50 px-2 py-0.5 rounded mx-1">
                          &apos;bodroy&apos;
                        </span>
                        {notice.split("'bodroy'")[1]}
                      </>
                    ) : (
                      notice
                    )}
                  </p>
                </div>
              )}

              {highlights && (
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                        <span className="text-primary mt-0.5">▹</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-100 uppercase tracking-wider mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-500/10 rounded-full border border-teal-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons — stopPropagation moved here to fix click blocking */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/10 relative">
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-slate-900 font-bold rounded-lg transition-colors text-sm"
                  >
                    View Live Project <ArrowUpRight size={16} />
                  </a>
                )}
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 rounded-lg transition-colors text-sm"
                  >
                    Source Code <Github size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}