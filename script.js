/**
 * Portfolio JavaScript - B.Tech IT Student
 * Smooth scrolling, animations, form validation, and interactivity
 */

// ============================================
// Common Variables - Social Links
// Update these values to change all links site-wide
// ============================================
const SOCIAL_LINKS = {
  github: "https://github.com/Balaji-9941",
  linkedin: "https://www.linkedin.com/in/balaji-m-a4766b2b6/",
  leetcode: "https://leetcode.com/u/Balaji_M_9941/",
  email: "mailto:manoharlalitha9941@gmail.com",
};

// ============================================
// Resume Download Configuration
// Update the path to point to your resume PDF
// ============================================
const RESUME_CONFIG = {
  filePath: "BALAJI RESUME.pdf",
  fileName: "Balaji_M_Resume.pdf",
};

document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // Populate all social links from SOCIAL_LINKS
  // ============================================
  const socialBtns = document.querySelectorAll("[data-link]");
  socialBtns.forEach((btn) => {
    const key = btn.getAttribute("data-link");
    if (SOCIAL_LINKS[key]) {
      btn.setAttribute("href", SOCIAL_LINKS[key]);
    }
  });

  // ============================================
  // DOM Elements
  // ============================================
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileNavLinks = mobileMenu.querySelectorAll("a");
  const contactForm = document.getElementById("contact-form");
  const successModal = document.getElementById("success-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const revealElements = document.querySelectorAll(
    ".reveal-up, .reveal-left, .reveal-right",
  );
  const downloadResumeBtn = document.getElementById("download-resume-btn");

  // ============================================
  // Resume Download Function
  // ============================================
  function downloadResume() {
    const link = document.createElement("a");
    link.href = RESUME_CONFIG.filePath;
    link.download = RESUME_CONFIG.fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", downloadResume);
  }

  // ============================================
  // Navbar Scroll Effect
  // ============================================
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-slate-900/90", "backdrop-blur-xl", "shadow-lg");
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.remove(
        "bg-slate-900/90",
        "backdrop-blur-xl",
        "shadow-lg",
      );
      navbar.classList.add("bg-transparent");
    }
  }

  window.addEventListener("scroll", handleNavbarScroll);
  handleNavbarScroll();

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  }

  mobileMenuBtn.addEventListener("click", toggleMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      mobileMenuBtn.querySelector("i").classList.remove("fa-times");
      mobileMenuBtn.querySelector("i").classList.add("fa-bars");
    });
  });

  // ============================================
  // Smooth Scrolling
  // ============================================
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const navbarHeight = navbar.offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ============================================
  // Contact Form Validation
  // ============================================
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function showError(input, message) {
    input.classList.add("error");
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.textContent = message;
      errorElement.classList.add("show");
    }
  }

  function hideError(input) {
    input.classList.remove("error");
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains("error-message")) {
      errorElement.classList.remove("show");
    }
  }

  function validateForm(e) {
    e.preventDefault();
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name");
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Name must be at least 2 characters");
      isValid = false;
    } else {
      hideError(nameInput);
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Please enter your email");
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address");
      isValid = false;
    } else {
      hideError(emailInput);
    }

    if (messageInput.value.trim() === "") {
      showError(messageInput, "Please enter your message");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters");
      isValid = false;
    } else {
      hideError(messageInput);
    }

    if (isValid) {
      showSuccessModal();
      contactForm.reset();
    }
  }

  contactForm.addEventListener("submit", validateForm);

  ["name", "email", "message"].forEach((id) => {
    const input = document.getElementById(id);
    input.addEventListener("input", () => hideError(input));
  });

  // ============================================
  // Success Modal
  // ============================================
  function showSuccessModal() {
    successModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function hideSuccessModal() {
    successModal.classList.remove("show");
    document.body.style.overflow = "";
  }

  closeModalBtn.addEventListener("click", hideSuccessModal);

  successModal.addEventListener("click", (e) => {
    if (e.target === successModal) {
      hideSuccessModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && successModal.classList.contains("show")) {
      hideSuccessModal();
    }
  });

  // ============================================
  // Typing Animation
  // ============================================
  const typingElement = document.querySelector(".typing-text");
  if (typingElement) {
    const cursorSpan = typingElement.querySelector("span");
    const text = "Aspiring Full-Stack Developer";
    typingElement.innerHTML = "";
    const textSpan = document.createElement("span");
    typingElement.appendChild(textSpan);
    if (cursorSpan) typingElement.appendChild(cursorSpan);

    let charIndex = 0;
    const typingSpeed = 100;
    const pauseTime = 2000;

    function typeText() {
      if (charIndex < text.length) {
        textSpan.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(eraseText, pauseTime);
      }
    }

    function eraseText() {
      if (charIndex > 0) {
        textSpan.textContent = text.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed / 2);
      } else {
        setTimeout(typeText, typingSpeed);
      }
    }

    setTimeout(typeText, 1000);
  }

  // ============================================
  // Active Navigation Highlighting
  // ============================================
  const sections = document.querySelectorAll("section[id]");

  function highlightActiveNavLink() {
    const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("text-white");
          link.classList.add("text-white/80");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.remove("text-white/80");
            link.classList.add("text-white");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", highlightActiveNavLink);

  // ============================================
  // Parallax Effect
  // ============================================
  const floatingShapes = document.querySelectorAll(".animate-float");
  if (!window.matchMedia("(pointer: coarse)").matches) {
    document.addEventListener("mousemove", (e) => {
      floatingShapes.forEach((shape, index) => {
        const speed = (index + 1) * 20;
        const x = (window.innerWidth / 2 - e.clientX) / speed;
        const y = (window.innerHeight / 2 - e.clientY) / speed;
        shape.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  }

  // ============================================
  // Skill Card Hover
  // ============================================
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

  // ============================================
  // Project Card 3D Tilt
  // ============================================
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });
    card.addEventListener("mouseleave", function () {
      this.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  // ============================================
  // Keyboard Navigation
  // ============================================
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      toggleMobileMenu();
    }
  });

  // ============================================
  // Intersection Observer
  // ============================================
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0.1 },
  );

  revealElements.forEach((el) => observer.observe(el));

 
