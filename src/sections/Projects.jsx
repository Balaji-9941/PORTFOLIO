import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Banking System",
    description:
      "Designed and developed a Java-based Banking System with a user-friendly Swing GUI, emphasizing strong Object-Oriented Programming and clean architecture.",
    image: "/images/Banking",
    tech: ["JAVA"],
    github: "https://github.com/Balaji-9941/BankingSystem",
    demo: "",
    shadowColor: "shadow-[0_20px_60px_rgba(255,154,139,0.25)]",
  },
  {
    title: "Tasken",
    description:
      "A To-Do list web application built with Javascript DOM and BOM Concepts. Styled using Bootstrap",
    image: "/images/Banking",
    tech: ["Html", "Css", "JavaScript", "BootStrap"],
    github: "https://github.com/Balaji-9941/TASKEN-WEB-APP",
    demo: "",
    shadowColor: "shadow-[0_20px_60px_rgba(255,154,139,0.25)]",
  },
  {
    title: "AI Codebase Explainer",
    description:
      "Developed an AI-powered code analysis tool that converts complex codebases into interactive, conversational documentation. By enabling developers to explore unfamiliar projects through natural language queries, the tool significantly accelerates onboarding and improves code comprehension, helping teams understand and navigate large systems up to 10x faster.",
    image: "/images/Banking",
    tech: ["Python"],
    github: "https://github.com/Balaji-9941/TASKEN-WEB-APP",
    demo: "",
    shadowColor: "shadow-[0_20px_60px_rgba(255,154,139,0.25)]",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={sectionRef} className="section-paper relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="sculptural-text text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Featured Projects
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#8A8A8A] text-lg max-w-xl"
          >
            A showcase of my best work and creative solutions
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              {/* Layered Card Stack */}
              <div className="relative">
                {/* Shadow Layer */}
                <div
                  className={`absolute inset-0 rounded-[32px] ${project.shadowColor} transition-all duration-300 group-hover:scale-105`}
                  style={{ transform: "translate(8px, 8px)" }}
                />

                {/* Content Layer */}
                <motion.div className="relative bg-white rounded-[32px] overflow-hidden paper-texture transition-all duration-300 group-hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />

                    {/* Hover Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-white/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-2xl shadow-lg text-[#4A4A4A] hover:text-[#1A1A1A] transition-colors"
                      >
                        <Github size={22} />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-[#1A1A1A] rounded-2xl shadow-lg text-white transition-colors"
                      >
                        <ExternalLink size={22} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-medium text-[#1A1A1A] mb-2 group-hover:text-[#4A4A4A] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#8A8A8A] text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-[#4A4A4A] bg-[#F8F6F3] rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#4A4A4A] bg-[#F8F6F3] rounded-full hover:bg-[#F0EBE3] transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {/* <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#1A1A1A] rounded-full hover:bg-[#333] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a> */}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="https://github.com/Balaji-9941"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -4,
              boxShadow: "0 16px 50px rgba(183, 156, 220, 0.3)",
            }}
            whileTap={{ y: 1 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1A1A1A] font-medium rounded-full shadow-lg transition-all duration-200"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
