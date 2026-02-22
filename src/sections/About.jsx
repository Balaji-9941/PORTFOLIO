import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code, Lightbulb, Users, Trophy } from "lucide-react";

const stats = [
  { icon: Code, value: 5, suffix: "+", label: "Projects", color: "coral" },
  {
    icon: Lightbulb,
    value: 30,
    suffix: "+",
    label: "Problems",
    color: "lavender",
  },
  { icon: Users, value: 3, suffix: "", label: "Years", color: "sky" },
  // { icon: Trophy, value: 5, suffix: "+", label: "Hackathons", color: "peach" },
];

const colorMap = {
  coral: "shadow-[0_12px_40px_rgba(255,154,139,0.3)]",
  lavender: "shadow-[0_12px_40px_rgba(183,156,220,0.3)]",
  sky: "shadow-[0_12px_40px_rgba(135,206,235,0.3)]",
  peach: "shadow-[0_12px_40px_rgba(255,200,160,0.3)]",
};

function AnimatedCounter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={sectionRef} className="section-paper relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Paper Stack Container */}
        <div className="relative">
          {/* Back Paper Layer */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#F8F6F3] rounded-[40px]"
            style={{
              transform: "translate(24px, 24px)",
              boxShadow: "0 20px 60px rgba(135, 206, 235, 0.2)",
            }}
          />

          {/* Middle Paper Layer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#FDFCFA] rounded-[40px]"
            style={{
              transform: "translate(12px, 12px)",
              boxShadow: "0 20px 60px rgba(183, 156, 220, 0.2)",
            }}
          />

          {/* Front Paper Layer - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white rounded-[40px] p-8 md:p-12 paper-texture"
            style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative flex justify-center order-2 lg:order-1"
              >
                {/* Paper Frame Layers */}
                <div
                  className="absolute w-64 h-80 bg-[#FDFCFA] rounded-[50px]"
                  style={{
                    transform: "translate(16px, 16px) rotate(-4deg)",
                    boxShadow: "0 20px 60px rgba(255, 154, 139, 0.25)",
                  }}
                />
                <div
                  className="absolute w-64 h-80 bg-[#F8F6F3] rounded-[50px]"
                  style={{
                    transform: "translate(28px, 8px) rotate(-8deg)",
                    boxShadow: "0 20px 60px rgba(183, 156, 220, 0.25)",
                  }}
                />

                {/* Main Image */}
                <motion.div
                  whileHover={{ rotate: -2, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-64 h-80 bg-white rounded-[50px] p-4 overflow-hidden"
                  style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#F8F6F3]">
                    <img
                      src="/images/about-image.png"
                      alt="About Rahul"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.8,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    className="absolute -bottom-3 -right-3 px-4 py-2 bg-white rounded-2xl text-sm font-medium text-[#4A4A4A]"
                    style={{ boxShadow: "0 8px 30px rgba(135, 206, 235, 0.3)" }}
                  >
                    🎓 B.Tech IT
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Content Column */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h2 className="sculptural-text text-4xl md:text-5xl text-[#1A1A1A] mb-2">
                    About Me
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FF9A8B] to-[#B79CDC] rounded-full mb-8" />
                </motion.div>

                <div className="space-y-5">
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="text-[#4A4A4A] leading-relaxed"
                  >
                    I am a third-year B.Tech Information Technology student with
                    a strong interest in developing innovative software
                    solutions. My journey in technology began with curiosity and
                    has since evolved into a dedicated passion for designing and
                    building applications that address real-world challenges.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="text-[#4A4A4A] leading-relaxed"
                  >
                    I am currently pursuing my degree with a strong focus on
                    full-stack development, where I actively apply logical
                    problem-solving and structured design principles to build
                    scalable, end-to-end applications. Through hands-on projects
                    and continuous learning, I have developed a solid ability to
                    translate complex requirements into efficient,
                    well-organized software solutions.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="text-[#4A4A4A] leading-relaxed"
                  >
                    Beyond academics and development work, I actively engage in
                    exploring emerging technologies and expanding my technical
                    perspective. I also enjoy collaborating with peers, sharing
                    knowledge, and supporting fellow students in their learning
                    journey.
                  </motion.p>
                </div>

                {/* Career Objective Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 p-6 bg-[#FDFCFA] rounded-3xl border-l-4 border-[#FF9A8B]"
                >
                  <h4 className="text-lg font-medium text-[#1A1A1A] mb-2">
                    Career Objective
                  </h4>
                  <p className="text-[#8A8A8A] text-sm leading-relaxed">
                    Seeking software developer opportunities where I can
                    leverage my technical skills and creativity to build
                    impactful products while continuing to grow as a developer.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-white rounded-3xl p-6 text-center cursor-pointer transition-all duration-200 ${colorMap[stat.color]}`}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="inline-flex p-3 bg-[#F8F6F3] rounded-2xl mb-4"
              >
                <stat.icon size={24} className="text-[#4A4A4A]" />
              </motion.div>
              <div className="sculptural-text text-3xl text-[#1A1A1A] mb-1">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-[#8A8A8A]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
