import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Check,
} from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://https://github.com/Balaji-9941.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/balaji-m-a4766b2b6/",
    label: "LinkedIn",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "manoharlalitha9941@gmail.com",
    href: "mailto:manoharlalitha9941@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "https://maps.app.goo.gl/twJscCfWUHuSWJZa6",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="section-paper relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="sculptural-text text-4xl md:text-5xl text-[#1A1A1A] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#8A8A8A] text-lg max-w-xl">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div>
            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex items-center gap-4 p-5 bg-white rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F6F3] flex items-center justify-center text-[#4A4A4A] group-hover:bg-[#FF9A8B] group-hover:text-white transition-colors duration-200">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs text-[#8A8A8A] uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-[#1A1A1A] font-medium">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white rounded-3xl shadow-md mb-10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#1A1A1A] font-medium">
                  Available for work
                </span>
              </div>
              <p className="text-[#8A8A8A] text-sm">
                I'm currently open to new opportunities and collaborations. Feel
                free to reach out!
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-[#1A1A1A] font-medium mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + index * 0.08,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    whileHover={{ scale: 1.15, y: -4, rotate: 5 }}
                    className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#4A4A4A] hover:text-[#1A1A1A] hover:shadow-lg transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-[32px] p-8 shadow-lg paper-texture"
            >
              <h3 className="text-2xl font-medium text-[#1A1A1A] mb-8">
                Send Message
              </h3>

              <div className="space-y-5">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <label className="block text-sm text-[#8A8A8A] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#F8F6F3] rounded-2xl text-[#1A1A1A] placeholder-[#8A8A8A] focus:outline-none focus:bg-white focus:shadow-md focus:-translate-y-0.5 transition-all duration-200"
                    style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.04)" }}
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <label className="block text-sm text-[#8A8A8A] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#F8F6F3] rounded-2xl text-[#1A1A1A] placeholder-[#8A8A8A] focus:outline-none focus:bg-white focus:shadow-md focus:-translate-y-0.5 transition-all duration-200"
                    style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.04)" }}
                    placeholder="your@email.com"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <label className="block text-sm text-[#8A8A8A] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-[#F8F6F3] rounded-2xl text-[#1A1A1A] placeholder-[#8A8A8A] focus:outline-none focus:bg-white focus:shadow-md focus:-translate-y-0.5 transition-all duration-200 resize-none"
                    style={{ boxShadow: "inset 0 2px 8px rgba(0,0,0,0.04)" }}
                    placeholder="Your message..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.9,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    y: -3,
                    boxShadow: "0 16px 50px rgba(255, 154, 139, 0.35)",
                  }}
                  whileTap={{ y: 1 }}
                  className="w-full py-4 bg-[#1A1A1A] text-white font-medium rounded-2xl flex items-center justify-center gap-2 shadow-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : isSubmitted ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
