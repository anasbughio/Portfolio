"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Download,
  ChevronRight,
  Terminal,
  Send,
  Briefcase,
  Calendar,
} from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import SkillBadge from "./components/SkillBadge";
import Image from "next/image";

// --- DATA ---
const skills = [
  "MongoDB",
  "Express.js",
  "React.js",
  "Node.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Shopify",
  "WordPress",
  "Webflow",
  "Docker",
  "AWS",
  "Git/GitHub",
];

const projects = [
  {
    title: "MedVision AI",
    description:
      "An automated brain tumor detection and appointment scheduling system. Built to bridge complex AI models with a modern, user-friendly frontend.",
    notice: "",
    highlights: [
      "Integrated YOLOv11 model for high-accuracy medical image analysis.",
      "Developed secure, seamless appointment scheduling workflows.",
      "Implemented robust user authentication with secure password recovery using mailer.ts.",
      "Engineered a comprehensive administrative dashboard for real-time system management.",
      "Built with Next.js and TypeScript for optimal frontend performance.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "YOLOv11",
      "Python",
      "Tailwind CSS",
    ],
    liveUrl: "https://medvision-ai.ddns.net/",
    githubUrl: "https://github.com/minhasfahad/medvision-ai",
  },
  {
    title: "Luxury Timepiece Store",
    description:
      "A premium e-commerce experience built on Shopify. Designed to provide a seamless, responsive shopping experience tailored for high-end luxury watches.",
    notice: "Note to visitors: Use password 'bodroy' to access the storefront.", // <-- Added this new field!
    highlights: [
      "Customized the Horizon theme with over 70% custom Liquid code to match a high-end reference design.",
      "Built a seamless, responsive shopping experience tailored for luxury watches.",
      "Optimized product pages and collections for performance and conversions.",
    ],
    techStack: ["Shopify", "Liquid", "HTML/CSS", "JavaScript"],
    liveUrl: "https://watches-store-practice.myshopify.com/",
    githubUrl: "",
  },
  {
    title: "We Know Training Portal",
    description:
      "A modern corporate training landing page built pixel-perfectly from a Figma prototype.",
    notice: "",
    highlights: [
      "Translated a complex Figma design provided by the team lead into a fully functional Webflow site.",
      "Ensured 100% design fidelity and responsive behavior across all device breakpoints.",
      "Leveraged Webflow's visual development tools for rapid prototyping and deployment.",
    ],
    techStack: ["Webflow", "Figma", "UI/UX Development"],
    liveUrl: "https://we-know-training.webflow.io/",
    githubUrl: "", // <-- ADD THIS LINE
  },
  {
    title: "Serenity AI — Digital Mental Health Companion",
    description:
      "A full-stack AI-powered mental health platform providing personalized emotional support, mood tracking, guided exercises, smart journaling, and AI-generated wellness insights.",
    notice: "",
    highlights: [
      "AI Chat Companion powered by Google Gemini AI for personalized emotional support.",
      "Comprehensive mood tracking with analytics and trend visualization.",
      "Smart journal with AI reflections and sentiment analysis.",
      "Goals tracker with progress visualization and guided exercises.",
      "Sleep tracker with mood correlation charts and wellness scores.",
      "AI-generated weekly mental health reports and crisis resources.",
      "Secure JWT authentication with HTTP-only cookies and push notifications.",
      "Deployed on AWS with Docker containerization and CI/CD pipelines.",
    ],
    techStack: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Google Gemini AI",
      "Docker",
      "AWS",
      "JWT",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/anasbughio/mental-health-platform.git",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen overflow-hidden pb-20">
      {/* --- HERO SECTION --- */}
      <section
        id="hero"
        className="w-full min-h-screen flex items-center pt-28 pb-16 md:pt-20 md:pb-0 relative overflow-hidden"
      >
        {/* Background Glows - Scaled down slightly on mobile to prevent horizontal scrolling */}
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 rounded-full blur-[100px] md:blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-teal-800/10 rounded-full blur-[100px] md:blur-[120px] -z-10" />

        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center lg:pb-16 z-10">
          {/* Left Column: Text (Order 2 on mobile so it sits under the image, Order 1 on desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border-primary/20"
            >
              <Terminal size={16} className="text-primary" />
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Available for Job Opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-200 font-heading mb-4 md:mb-6 leading-tight"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-300">
                Anas Bughio
              </span>
              .<br />I build things for the web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mb-8 md:mb-10 leading-relaxed px-4 md:px-0"
            >
              I&apos;m a MERN Stack Developer and CMS Developer specializing in
              Shopify, WordPress, and Webflow. I create highly performant,
              scalable web applications and digital experiences. Currently exploring
              DevOps and cloud infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 w-full"
            >
              <a
                href="#contact"
                className="btn-primary px-6 py-3 text-sm sm:text-base w-full sm:w-auto flex justify-center"
              >
                <Mail size={18} /> Get In Touch
              </a>
              <a
                href="/Anas_Bughio_Resume (1).pdf"
                target="_blank"
                className="flex items-center justify-center gap-2 px-6 py-3 glass-card hover:border-primary/30 rounded-lg text-slate-300 hover:text-primary transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                <Download size={18} /> Download Resume
              </a>
            </motion.div>
          </div>

          {/* Right Column: Image (Order 1 on mobile so it is on top, Order 2 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-md mx-auto aspect-[4/5] order-1 md:order-2 mb-4 md:mb-0"
          >
            {/* Decorative background glow behind the image */}
            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-full blur-2xl md:blur-3xl -z-10 animate-pulse"
              style={{ animationDuration: "4s" }}
            ></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden glass-card border-white/10 p-2 transform transition-transform duration-500 hover:rotate-1 hover:scale-105">
              <div className="relative w-full h-full rounded-3xl overflow-hidden bg-surface">
                <Image
                  src="/anas.jpg"
                  alt="Anas Bughio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="w-full py-24 bg-surface/30 border-y border-white/5 relative z-10"
      >
        <div className="section-container">
          <SectionHeading
            title="About Me"
            subtitle="My journey, education, and current focus."
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-slate-400 leading-relaxed"
            >
              <p>
                I am a MERN Stack Developer and CMS Developer with expertise in
                <strong className="text-slate-200">
                  {" "}Shopify, WordPress, and Webflow
                </strong>
                . I specialize in building scalable full-stack web applications
                and creating seamless digital experiences across multiple platforms.
              </p>
              <p>
                I have hands-on experience developing with React, Node.js, MongoDB,
                Express.js, and Next.js. Beyond frontend and backend development,
                I&apos;m expanding my skill set into DevOps and cloud infrastructure,
                working with Docker, AWS services, and deployment pipelines.
              </p>
              <p>
                I&apos;m passionate about creating performant, user-centric applications
                and bridging the gap between design and complex backend systems. My goal
                is to deliver high-quality digital solutions that make an impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent rounded-t-2xl"></div>
              <h3 className="text-xl font-bold text-slate-200 mb-6 font-heading">
                Quick Facts
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-3">
                  <ChevronRight
                    className="text-primary mt-0.5 shrink-0"
                    size={18}
                  />
                  <div>
                    <strong className="text-slate-300 block">Education</strong>
                    <span className="text-slate-400 text-sm">
                      BSCS (Final Year) - UMT, Lahore
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight
                    className="text-primary mt-0.5 shrink-0"
                    size={18}
                  />
                  <div>
                    <strong className="text-slate-300 block">
                      Current Role
                    </strong>
                    <span className="text-slate-400 text-sm">
                      Web Dev Internee (Mar 2026 - Present)
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight
                    className="text-primary mt-0.5 shrink-0"
                    size={18}
                  />
                  <div>
                    <strong className="text-slate-300 block">Core Focus</strong>
                    <span className="text-slate-400 text-sm">
                      MERN Stack, Next.js, React, Tailwind CSS
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="w-full py-24 relative z-10">
        <div className="section-container">
          <SectionHeading
            title="Professional Experience"
            subtitle="My work history and professional journey."
          />

          <div className="max-w-3xl mx-auto relative mt-12">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10"></div>

            {/* Experience Item (Internship) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col md:flex-row justify-between items-center w-full mb-8"
            >
              {/* Left Side: Date (Desktop) */}
              <div className="hidden md:block w-[45%] text-right pr-8">
                <span className="inline-flex items-center gap-2 text-primary font-medium bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm">
                  <Calendar size={16} /> March 2026 - Present
                </span>
              </div>

              {/* Center Timeline Dot & Icon */}
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-surface border-4 border-background flex items-center justify-center z-10 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                <Briefcase size={16} className="text-primary" />
              </div>

              {/* Right Side: Content Card */}
              <div className="w-full md:w-[45%] pl-16 md:pl-8 mt-2 md:mt-0">
                <div className="glass-card p-6 md:p-8 rounded-2xl hover:border-primary/30 transition-colors duration-300">
                  {/* Date (Mobile Only) */}
                  <div className="md:hidden mb-4">
                    <span className="inline-flex items-center gap-2 text-primary font-medium bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-xs">
                      <Calendar size={14} /> Mar 2026 - Present
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-200 mb-1 font-heading">
                    Web Developer
                  </h3>
                  {/* UPDATE THIS WITH YOUR COMPANY NAME! */}
                  <h4 className="text-slate-400 font-medium mb-6 text-sm md:text-base">
                    Integriti - Lahore, PK
                  </h4>

                  <ul className="space-y-3">
                    <li className="text-sm md:text-base text-slate-400 flex items-start gap-3 leading-relaxed">
                      <span className="text-primary mt-1">▹</span>
                      Developing digital experiences and practice websites
                      across major CMS platforms including WordPress, Elementor,
                      Shopify, and Webflow.
                    </li>
                    <li className="text-sm md:text-base text-slate-400 flex items-start gap-3 leading-relaxed">
                      <span className="text-primary mt-1">▹</span>
                      Concurrently architecting a complex Next.js and TypeScript
                      application integrating YOLOv11 for AI-driven medical
                      analysis.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="w-full py-24 relative z-10">
        <div className="section-container">
          <SectionHeading
            title="Technical Arsenal"
            subtitle="Technologies and tools I work with daily."
          />
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} name={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section
        id="projects"
        className="w-full py-24 bg-surface/30 border-y border-white/5 relative z-10"
      >
        {/* We widened the container using max-w-[1400px] */}
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of the notable applications I have built."
          />
          {/* Changed to xl:grid-cols-4 to put 4 in a row on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="w-full pt-32 relative z-10 text-center">
        <div className="section-container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-200 mb-6">
              Let&apos;s Build Something.
            </h2>
            <p className="text-slate-400 mb-10 text-lg">
              I&apos;m currently looking for full-time opportunities. Whether
              you have a question, a project idea, or just want to say hi, my
              inbox is always open.
            </p>

            <div className="flex flex-col items-center mb-16">
              <a
                href="https://mail.google.com/mail/?view=cm&to=anasbughio@gmail.com&su=Portfolio%20Inquiry:%20Let's%20Connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-slate-100 hover:bg-white text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 mb-4"
              >
                <Send size={20} />
                Say Hello
              </a>
              {/* Fallback text for users without email clients */}
              <p className="text-slate-500 text-sm">
                or email directly at{" "}
                <span className="text-slate-300 select-all">
                  anasbughio@gmail.com
                </span>
              </p>
            </div>

            {/* Social Links Moved Here */}
            <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10 w-full">
              <span className="text-sm font-medium text-slate-500 tracking-wider uppercase">
                Connect with me
              </span>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/anasbughio"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 glass-card rounded-full text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anas-bughio/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 glass-card rounded-full text-slate-400 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
