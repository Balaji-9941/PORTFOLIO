import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const handleScroll = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nameChars = ["B", "A", "L", "A", "J", "I"];
  const lastNameChars = ["M"];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Paper Layer Shapes */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-1/4 left-[10%] w-64 h-80 bg-white rounded-[40px] -z-10"
        style={{
          transform: "rotate(-6deg)",
          boxShadow: "0 20px 60px rgba(183, 156, 220, 0.25)",
        }}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute top-1/4 left-[8%] w-64 h-80 bg-[#FDFCFA] rounded-[40px] -z-20"
        style={{
          transform: "rotate(-10deg)",
          boxShadow: "0 20px 60px rgba(135, 206, 235, 0.25)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Name Typography */}
            <div className="mb-4">
              <h1 className="sculptural-text text-6xl sm:text-7xl lg:text-8xl text-[#1A1A1A] leading-none">
                {nameChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              <h1 className="sculptural-text text-6xl sm:text-7xl lg:text-8xl text-[#1A1A1A] leading-none mt-1">
                {lastNameChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mb-2"
            >
              <p className="text-xl text-[#4A4A4A] font-light tracking-wide">
                B.Tech IT Student
              </p>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="mb-8"
            >
              <p className="text-lg text-[#8A8A8A]">
                Aspiring Full-Stack Developer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="text-[#4A4A4A] text-lg max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Transforming ideas into elegant code solutions. Passionate about
              building impactful software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.button
                onClick={() => handleScroll("#projects")}
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 50px rgba(255, 154, 139, 0.35)",
                }}
                whileTap={{ y: 1 }}
                className="px-8 py-4 bg-[#1A1A1A] text-white font-medium rounded-full shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowDown size={18} />
              </motion.button>
              <motion.button
                onClick={() => handleScroll("#contact")}
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 50px rgba(183, 156, 220, 0.3)",
                }}
                whileTap={{ y: 1 }}
                className="px-8 py-4 bg-white text-[#1A1A1A] font-medium rounded-full shadow-lg transition-all duration-200"
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/Balaji-9941",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/balaji-m-a4766b2b6/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:balajiit.official@gmail.com",
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.6 + i * 0.08,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-[#4A4A4A] hover:text-[#1A1A1A] hover:shadow-lg transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Avatar with Paper Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Paper Frame Layers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-72 h-96 sm:w-80 sm:h-[28rem] bg-white rounded-[50px]"
                style={{
                  transform: "translate(20px, -20px) rotate(6deg)",
                  boxShadow: "0 30px 80px rgba(255, 154, 139, 0.25)",
                }}
              />
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [0, -1, 0] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-72 h-96 sm:w-80 sm:h-[28rem] bg-[#FDFCFA] rounded-[50px]"
                style={{
                  transform: "translate(35px, -10px) rotate(10deg)",
                  boxShadow: "0 30px 80px rgba(183, 156, 220, 0.25)",
                }}
              />
            </div>

            {/* Main Image Frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02, rotate: -2 }}
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] bg-white rounded-[50px] p-4 overflow-hidden"
              style={{ boxShadow: "0 30px 80px rgba(0, 0, 0, 0.12)" }}
            >
              <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#F8F6F3]">
                <img
                  src="/images/hero-avatar.png"
                  alt="Rahul Sharma"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Floating Badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.4,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute -left-4 top-1/4 px-4 py-2 bg-white rounded-2xl text-sm font-medium text-[#4A4A4A]"
                style={{ boxShadow: "0 8px 30px rgba(255, 154, 139, 0.25)" }}
              >
                💻 Full-Stack
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.5,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute -right-4 top-1/2 px-4 py-2 bg-white rounded-2xl text-sm font-medium text-[#4A4A4A]"
                style={{ boxShadow: "0 8px 30px rgba(183, 156, 220, 0.25)" }}
              >
                🚀 Problem Solver
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  delay: 1.6,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="absolute left-1/4 -bottom-3 px-4 py-2 bg-white rounded-2xl text-sm font-medium text-[#4A4A4A]"
                style={{ boxShadow: "0 8px 30px rgba(135, 206, 235, 0.25)" }}
              >
                ⚡ Creative
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[#8A8A8A]"
        >
          <span className="text-xs tracking-wider">SCROLL</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
