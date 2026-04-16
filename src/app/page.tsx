"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Brain, User, Briefcase, GraduationCap, ChevronRight, Award, Trophy, Shapes, Network, BarChart, Box } from "lucide-react";
import { SiPython, SiC, SiCplusplus, SiJavascript, SiGooglecolab, SiStreamlit, SiMysql } from "react-icons/si";
import { FaJava, FaDatabase, FaCss3, FaHtml5 } from "react-icons/fa";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const fadeRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const zoomIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="#hero" className="font-bold text-xl tracking-tighter">Anila Mathai<span className="text-accent">.</span></Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#hero" className="nav-link">Home</Link>
            <Link href="#about" className="nav-link">About</Link>
            <Link href="#education" className="nav-link">Education</Link>
            <Link href="#projects" className="nav-link">Projects</Link>
            <Link href="#skills" className="nav-link">Skills</Link>
            <Link href="#contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10" />
        
        <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="max-w-4xl mx-auto text-center z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Hi, I'm Anila Mathai</h2>
          <div className="text-xl md:text-3xl text-muted mb-8 h-10 font-light">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Software Developer', 1000,
                'AI/ML Developer', 1000,
                'Problem Solver', 1000,
                'Frontend Developer', 1000
              ]}
              wrapper="span"
              speed={50}
              className="text-foreground font-medium border-b-2 border-accent"
              repeat={Infinity}
            />
          </div>
          
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Left: Avatar Profile Box */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={zoomIn} className="lg:w-1/3">
               <div className="glass-card p-8 flex flex-col items-center text-center h-full">
                 <div className="w-48 h-48 rounded-full bg-white/5 mb-6 flex items-center justify-center border-[6px] border-white/5 overflow-hidden">
                    <User size={80} className="text-muted/50" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Anila Mathai</h3>
                 <span className="text-accent text-sm font-medium mb-6 uppercase tracking-widest text-[#a1a1aa] block border-b border-white/5 w-full pb-6">Software Developer</span>
                 
                 <div className="w-full space-y-4">
                    <a href="#projects" className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/30 rounded transition-all">
                      <Briefcase size={18} className="text-accent" />
                      <span className="font-medium text-sm">View Projects</span>
                    </a>
                    <a href="#contact" className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-accent/10 border border-white/5 hover:border-accent/30 rounded transition-all">
                      <Mail size={18} className="text-accent" />
                      <span className="font-medium text-sm">Contact Me</span>
                    </a>
                 </div>
               </div>
            </motion.div>

            {/* Right: Bio Details */}
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="lg:w-2/3">
              <h4 className="text-accent uppercase tracking-widest text-sm font-bold mb-2">About Me</h4>
              <h2 className="text-3xl font-bold mb-6">Transforming Ideas into Digital Reality</h2>
              <div className="space-y-4 text-muted leading-relaxed mb-10">
                 <p>
                   As an emerging software developer specializing in <strong>AI/ML and Software Development</strong>, I blend a rigorous academic foundation with hands-on project experience.
                 </p>
                 <p>
                   My professional efforts are concentrated on leveraging this convergence of technology to solve complex problems. I am passionate about architecting intelligent systems and am eagerly preparing to bring my technical expertise to the industry full-time.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01]">
                   <GraduationCap size={40} className="text-accent opacity-80" />
                   <div>
                     <span className="block text-sm text-muted">Education</span>
                     <span className="block font-bold">B.Tech Graduating 2026</span>
                   </div>
                 </motion.div>
                 <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.01]">
                   <Code2 size={40} className="text-accent opacity-80" />
                   <div>
                     <span className="block text-sm text-muted">Expertise</span>
                     <span className="block font-bold">Software & AI</span>
                   </div>
                 </motion.div>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Education Section (Vertical Timeline) */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="section-title mb-2">Academic Background</motion.h2>
          </div>
          
          <div className="lg:w-2/3">
             <div className="timeline-track">
               
               <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="timeline-item">
                 <div className="timeline-marker"></div>
                 <div className="mb-2">
                   <span className="bg-white/5 px-3 py-1 text-xs font-semibold rounded-full border border-white/5 mr-3">2022 - 2026</span>
                   <span className="text-accent text-sm font-semibold tracking-wider">B.Tech</span>
                 </div>
                 <h4 className="text-xl font-bold mb-1">Computer Science Engineering</h4>
                 <p className="text-muted mb-3">Govt. Model Engineering College, KTU</p>
                 <div className="flex items-center gap-2 text-sm">
                   <Award size={16} className="text-accent" />
                   <span className="font-medium">CGPA: 8.92</span>
                 </div>
               </motion.div>

               <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="timeline-item">
                 <div className="timeline-marker"></div>
                 <div className="mb-2">
                   <span className="bg-white/5 px-3 py-1 text-xs font-semibold rounded-full border border-white/5 mr-3">2021</span>
                   <span className="text-accent text-sm font-semibold tracking-wider">Class XII</span>
                 </div>
                 <h4 className="text-xl font-bold mb-1">CBSE Science Stream</h4>
                 <p className="text-muted mb-3">Chavara Public School</p>
                 <div className="flex items-center gap-2 text-sm">
                   <Award size={16} className="text-accent" />
                   <span className="font-medium">96.2%</span>
                 </div>
               </motion.div>
               
               <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="timeline-item">
                 <div className="timeline-marker"></div>
                 <div className="mb-2">
                   <span className="bg-white/5 px-3 py-1 text-xs font-semibold rounded-full border border-white/5 mr-3">2019</span>
                   <span className="text-accent text-sm font-semibold tracking-wider">Class X</span>
                 </div>
                 <h4 className="text-xl font-bold mb-1">CBSE Board</h4>
                 <p className="text-muted mb-3">Chavara Public School</p>
                 <div className="flex items-center gap-2 text-sm">
                   <Award size={16} className="text-accent" />
                   <span className="font-medium">96%</span>
                 </div>
               </motion.div>

             </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white/[0.01]">
         <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-1/3">
              <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="section-title">Projects</motion.h2>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Arikomban",
                  role: "Frontend Developer",
                  duration: "4 Months",
                  description: "Real-time wild animal monitoring system leveraging YOLOv8 for detection and Telegram for instant alerts. Tracks wildlife movement.",
                  tags: ["YOLOv8", "OpenCV", "PyTorch", "Python", "Telegram Bot API", "MySQL"],
                  link: "https://github.com/anila-mathai/wildlife_detection"
                },
                {
                  title: "Auto-Architecture Explainer",
                  role: "AI/ML Developer",
                  duration: "Ongoing",
                  description: "System to automatically analyze source code and generate software architecture diagrams with natural-language explanations using LLMs and AST.",
                  tags: ["Python", "LLMs", "AST", "Clustering", "Graph Visualization"],
                  link: "https://github.com/anilamathai"
                },
                {
                  title: "Company Info Chatbot",
                  role: "Full Stack Developer",
                  duration: "2 Months",
                  description: "Energy advisory chatbot deployed using Google's Gemini API to provide energy usage insights and answer queries based on company knowledge.",
                  tags: ["Python", "Streamlit", "Gemini API", "dotenv"],
                  link: "https://github.com/anilamathai/company_info_chat_bot"
                },
                {
                  title: "Ceramic Tile Defect Detection",
                  role: "AI/ML Developer",
                  duration: "2 Months",
                  description: "Developed and trained a cutting-edge YOLOv8 object detection model for ceramic tile defect detection (cracks, holes, lines).",
                  tags: ["Python", "YOLOv8", "Roboflow"],
                  link: "https://github.com/anilamathai/defect-detection-app"
                },
                {
                  title: "Seatbelt Detector",
                  role: "AI/ML Developer",
                  duration: "1 Month",
                  description: "Lightweight image classification system using MobileNetV2, incorporating confidence-based filtering and a VLQ class for ambiguous inputs.",
                  tags: ["Python", "PyTorch", "MobileNetV2", "OpenCV"],
                  link: "https://github.com/anilamathai/Seatbelt-Detection"
                },
                {
                  title: "Store Sales Forecasting",
                  role: "AI/ML Developer",
                  duration: "2 Months",
                  description: "Time series forecasting model using Prophet on Kaggle's Store Sales dataset to predict future sales based on historical trends.",
                  tags: ["Python", "Pandas", "Prophet", "Matplotlib"],
                  link: "https://github.com/anilamathai/StoreSalesForcasting"
                }
              ].map((project, i) => (
                <motion.div key={i} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={zoomIn} whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(56, 189, 248, 0.15)" }} className="glass-card p-6 cursor-pointer group flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                    {project.link !== "https://github.com/anilamathai" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors">
                        <ExternalLink size={18} />
                        </a>
                    )}
                  </div>
                  <div className="flex justify-between items-center text-sm text-muted mb-4">
                    <span className="font-semibold text-accent/80">{project.role}</span>
                    <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded text-xs">{project.duration}</span>
                  </div>
                  <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 bg-white/5 border border-white/5 text-foreground/80 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeLeft} className="section-title text-center mb-16">Skills & Achievements</motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={zoomIn} className="flat-card border-b-2 border-b-accent/50 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
               <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded mb-6 text-accent">
                 <Code2 size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">Programming & Web</h3>
               <div className="flex flex-wrap gap-3">
                 {[
                   { name: "Python", icon: SiPython, color: "#3776AB" },
                   { name: "C", icon: SiC, color: "#A8B9CC" },
                   { name: "C++", icon: SiCplusplus, color: "#00599C" },
                   { name: "Java", icon: FaJava, color: "#ED8B00" },
                   { name: "HTML", icon: FaHtml5, color: "#E34F26" },
                   { name: "CSS", icon: FaCss3, color: "#1572B6" },
                   { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                   { name: "OOP", icon: Shapes, color: "#8b5cf6" },
                   { name: "DSA", icon: Network, color: "#10b981" },
                 ].map(skill => (
                   <span key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-sm rounded-lg hover:scale-110 hover:bg-white/10 transition-all cursor-default">
                     <skill.icon size={16} color={skill.color} />
                     {skill.name}
                   </span>
                 ))}
               </div>
            </motion.div>
            
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={zoomIn} className="flat-card border-b-2 border-b-[#9333ea]/50 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
               <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded mb-6 text-[#9333ea]">
                 <Brain size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4">AI, ML & Tools</h3>
               <div className="flex flex-wrap gap-3">
                 {[
                   { name: "AI/ML", icon: Brain, color: "#ec4899" },
                   { name: "Time Series Forecasting", icon: BarChart, color: "#f59e0b" },
                   { name: "Object Detection", icon: Box, color: "#3b82f6" },
                   { name: "Google Colab", icon: SiGooglecolab, color: "#F9AB00" },
                   { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
                   { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                   { name: "DBMS", icon: FaDatabase, color: "#6b7280" },
                 ].map(skill => (
                   <span key={skill.name} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-sm rounded-lg hover:scale-110 hover:bg-white/10 transition-all cursor-default">
                     <skill.icon size={16} color={skill.color} />
                     {skill.name}
                   </span>
                 ))}
               </div>
            </motion.div>
          </div>
          
          {/* Achievements Box */}
          <div className="mt-20">
             <div className="flex items-center justify-center gap-3 mb-10">
                <Trophy className="text-accent" size={32} />
                <h3 className="text-3xl font-bold text-center">Certifications & Achievements</h3>
             </div>
             <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:scale-[1.05] hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <h4 className="font-bold text-foreground group-hover:text-accent transition-colors mb-4 text-xl leading-snug">Deep Learning Certification</h4>
                  <p className="text-base text-muted group-hover:text-foreground/90 transition-colors">NPTEL 2025, conducted by IIT Ropar.</p>
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:scale-[1.05] hover:border-[#9333ea]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#9333ea]/10">
                  <h4 className="font-bold text-foreground group-hover:text-[#9333ea] transition-colors mb-4 text-xl leading-snug">Programming Essentials Bootcamp</h4>
                  <p className="text-base text-muted group-hover:text-foreground/90 transition-colors">C++, Python, React.js, SQL. Certified by LetsUpgrade & NSDC.</p>
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="group p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:scale-[1.05] hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                  <h4 className="font-bold text-foreground group-hover:text-accent transition-colors mb-4 text-xl leading-snug">International Conference</h4>
                  <p className="text-base text-muted group-hover:text-foreground/90 transition-colors">Trends in Engineering Systems and Technologies 2024, Govt. Model Engineering College.</p>
                </motion.div>
             </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-4xl mx-auto text-center">
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              <h2 className="section-title mb-4">Contact Me</h2>
              <p className="text-muted mb-10 max-w-lg mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </motion.div>
            
            <motion.div initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} variants={zoomIn} className="flex flex-row justify-center gap-6 mb-10">
              <a aria-label="Email" href="mailto:anilamathai2002@gmail.com" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.02] border border-white/10 hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group">
                <Mail size={24} className="text-foreground group-hover:text-background transition-colors" />
              </a>
              <a aria-label="GitHub" href="https://github.com/anilamathai" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.02] border border-white/10 hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group">
                <Github size={24} className="text-foreground group-hover:text-background transition-colors" />
              </a>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/in/anila-mathai-5a478b355/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.02] border border-white/10 hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group">
                <Linkedin size={24} className="text-foreground group-hover:text-background transition-colors" />
              </a>
            </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 text-center text-muted text-sm border-t border-white/5 bg-background">
        <p>© {new Date().getFullYear()} Anila Mathai. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
