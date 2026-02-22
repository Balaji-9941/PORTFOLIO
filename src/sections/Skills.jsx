import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiVscodium,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    name: "Languages",
    shadowColor: "shadow-[0_12px_40px_rgba(255,154,139,0.25)]",
    bgColor: "#FF9A8B",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Java", icon: FaJava, color: "#007396" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    name: "Frontend",
    shadowColor: "shadow-[0_12px_40px_rgba(183,156,220,0.25)]",
    bgColor: "#B79CDC",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    name: "Backend",
    shadowColor: "shadow-[0_12px_40px_rgba(135,206,235,0.25)]",
    bgColor: "#87CEEB",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#404040" },
    ],
  },
  {
    name: "Tools",
    shadowColor: "shadow-[0_12px_40px_rgba(255,200,160,0.25)]",
    bgColor: "#FFC8A0",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#333" },
      { name: "VS Code", icon: SiVscodium, color: "#007ACC" },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={sectionRef} className="section-paper relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="sculptural-text text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            My Skills
          </h2>
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[#8A8A8A] text-lg max-w-xl mx-auto"
          >
            Technologies I've mastered on my development journey
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.4 + categoryIndex * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative"
            >
              {/* Paper Card */}
              <div
                className={`bg-white rounded-[32px] p-6 ${category.shadowColor} paper-texture`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-semibold text-sm"
                    style={{ background: category.bgColor }}
                  >
                    {category.name[0]}
                  </div>
                  <h3 className="text-xl font-medium text-[#1A1A1A]">
                    {category.name}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      whileHover={{
                        y: -6,
                        rotate: Math.random() * 4 - 2,
                        scale: 1.05,
                      }}
                      className="group cursor-pointer"
                    >
                      <div className="relative bg-white rounded-2xl px-4 py-3 shadow-md hover:shadow-lg transition-all duration-200 border border-[#F0EBE3]">
                        {/* Lifted Corner */}
                        <div
                          className="absolute top-0 right-0 w-5 h-5 rounded-tr-2xl"
                          style={{
                            background:
                              "linear-gradient(135deg, #F8F6F3 50%, transparent 50%)",
                            boxShadow: "-2px 2px 4px rgba(0,0,0,0.04)",
                          }}
                        />

                        <div className="flex items-center gap-2 pr-3">
                          <skill.icon
                            size={18}
                            style={{ color: skill.color }}
                            className="group-hover:scale-110 transition-transform duration-200"
                          />
                          <span className="text-sm font-medium text-[#4A4A4A] group-hover:text-[#1A1A1A] transition-colors">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-[#8A8A8A] mb-6">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures",
              "Algorithms",
              "OOP",
              "Database Design",
              "REST APIs",
              "Agile",
            ].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.1 + i * 0.05 }}
                className="px-4 py-2 text-sm text-[#8A8A8A] bg-white rounded-full shadow-sm border border-[#F0EBE3]"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
