import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./App.css";

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #FAF8F5 0%, #F5F0E8 100%)",
      }}
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative w-20 h-20 mx-auto">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#FF9A8B] border-r-[#B79CDC]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-transparent border-t-[#87CEEB] border-l-[#FFC8A0]"
            />
          </div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sculptural-text text-[#1A1A1A]"
        >
          BALAJI M
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-[#8A8A8A] mt-2 text-sm"
        >
          Unfolding portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #FAF8F5 0%, #F5F0E8 50%, #F0EBE3 100%)",
          }}
        >
          {/* Background Blobs */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-[500px] h-[500px] -top-32 -right-32 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[60px]"
              style={{ background: "rgba(255, 154, 139, 0.35)" }}
              animate={{
                scale: [1, 1.1, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] top-1/3 -left-32 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[60px]"
              style={{ background: "rgba(183, 156, 220, 0.35)" }}
              animate={{
                scale: [1, 1.15, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] bottom-1/4 right-1/4 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] blur-[60px]"
              style={{ background: "rgba(135, 206, 235, 0.35)" }}
              animate={{
                scale: [1, 1.08, 1],
                x: [0, 25, 0],
                y: [0, -15, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[300px] h-[300px] bottom-20 left-1/3 rounded-[60%_40%_60%_30%/70%_30%_50%_60%] blur-[60px]"
              style={{ background: "rgba(255, 200, 160, 0.3)" }}
              animate={{
                scale: [1, 1.12, 1],
                x: [0, -20, 0],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
