import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Download, FileText, Check } from "lucide-react";

const stats = [
  { label: "Technical Skills", value: 95, suffix: "%", color: "#FF9A8B" },
  { label: "Dedication", value: 100, suffix: "%", color: "#B79CDC" },
  { label: "Learning", value: "∞", suffix: "", color: "#87CEEB" },
];

const features = [
  "Detailed work experience",
  "Technical skills overview",
  "Education background",
  "Project highlights",
];

function AnimatedProgress({ value, suffix }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && typeof value === "number") {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setProgress(value);
          clearInterval(timer);
        } else {
          setProgress(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {typeof value === "number" ? progress : value}
      {suffix}
    </span>
  );
}

export default function Resume() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Balaji 503 Resume (2) (1).pdf";
    link.download = "Balaji Resume.pdf";
    link.click();
  };

  return (
    <section id="resume" ref={sectionRef} className="section-paper relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <h2 className="sculptural-text text-4xl md:text-5xl text-[#1A1A1A] mb-4">
                My Resume
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[#8A8A8A] text-lg mb-10"
            >
              Ready to take the next step? Download my resume to learn more
              about my experience and skills.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="text-center p-4 bg-white rounded-3xl shadow-md"
                >
                  <div
                    className="sculptural-text text-2xl md:text-3xl mb-1"
                    style={{ color: stat.color }}
                  >
                    <AnimatedProgress value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[#8A8A8A]">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-3 mb-10"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
                  className="flex items-center gap-3 text-[#4A4A4A]"
                >
                  <div className="w-6 h-6 rounded-full bg-[#F8F6F3] flex items-center justify-center">
                    <Check size={14} className="text-[#FF9A8B]" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Download Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 60px rgba(255, 154, 139, 0.35)",
              }}
              whileTap={{ y: 2 }}
              onClick={handleDownload}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1A1A1A] text-white font-medium rounded-full shadow-lg transition-all duration-200"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </div>

          {/* Right Content - Resume Card Stack */}
          <motion.div
            initial={{ opacity: 0, rotateY: -20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="relative">
              {/* Back Layer */}
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, 1, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-64 h-80 bg-[#F8F6F3] rounded-[40px]"
                style={{
                  transform: "translate(24px, 24px) rotate(6deg)",
                  boxShadow: "0 30px 80px rgba(183, 156, 220, 0.3)",
                }}
              />

              {/* Middle Layer */}
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -1, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-64 h-80 bg-[#FDFCFA] rounded-[40px]"
                style={{
                  transform: "translate(12px, 12px) rotate(3deg)",
                  boxShadow: "0 30px 80px rgba(135, 206, 235, 0.3)",
                }}
              />

              {/* Front Layer - Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ rotate: -3, scale: 1.02 }}
                className="relative w-64 h-80 bg-white rounded-[40px] p-8 flex flex-col items-center justify-center paper-texture"
                style={{ boxShadow: "0 30px 80px rgba(255, 154, 139, 0.3)" }}
              >
                {/* PDF Icon */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-24 h-24 mb-6 rounded-3xl flex items-center justify-center shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF9A8B 0%, #B79CDC 100%)",
                  }}
                >
                  <FileText size={48} className="text-white" />
                </motion.div>

                {/* Text */}
                <h3 className="text-lg font-medium text-[#1A1A1A] mb-1 text-center">
                  Rahul_Sharma
                </h3>
                <p className="text-sm text-[#8A8A8A] mb-4">Resume.pdf</p>

                {/* File Info */}
                <div className="flex items-center gap-3 text-xs text-[#8A8A8A]">
                  <span className="px-3 py-1 bg-[#F8F6F3] rounded-full">
                    PDF
                  </span>
                  <span>2.4 MB</span>
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-5 right-5 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#FF9A8B]" />
                  <div className="w-2 h-2 rounded-full bg-[#B79CDC]" />
                  <div className="w-2 h-2 rounded-full bg-[#87CEEB]" />
                </div>

                {/* Status Indicator */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-[#8A8A8A]">Updated</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
