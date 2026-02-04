"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaServer,
  FaBrain,
  FaRocket,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiPython,
} from "react-icons/si";
import ReadmeDisplay from "@/components/readme";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
}

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "React", icon: <SiReact className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "AI/ML", icon: <SiPython className="text-yellow-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
];

const highlights = [
  {
    title: "Full Stack Architecture",
    desc: "Building production-ready applications with secure auth, RBAC, and scalable databases (SQL/NoSQL).",
    icon: <FaServer className="text-emerald-500" />,
  },
  {
    title: "AI & Automation",
    desc: "Integrating LLMs (OpenAI) and ML models (TensorFlow) to automate complex workflows and exams.",
    icon: <FaBrain className="text-purple-500" />,
  },
  {
    title: "Performance Optimization",
    desc: "Reducing API latency by 60% and optimizing frontend bundles for lightning-fast user experiences.",
    icon: <FaRocket className="text-orange-500" />,
  },
];

const AboutPage = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 80; // Optimized count for performance

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      });
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(100, 100, 100, 0.2)"; // Subtler particle color

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(drawParticles);
    };

    drawParticles();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        {/* 1. Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6">
            <FaCode /> Full Stack Developer & AI Enthusiast
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
            Mohammad Iqbal
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            I bridge the gap between complex backend logic and intuitive
            frontend design. Specializing in{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Next.js
            </span>{" "}
            ecosystems, I build scalable, AI-integrated applications that solve
            real business problems.
          </p>
          <section className="mt-10 max-w-3xl item-center">
            <h2 className="text-2xl font-bold mb-3">
              About Iqbal – Full Stack Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I’m Mohammad Iqbal, a Full Stack Developer and Software Engineer
              with experience building real-world applications including
              AI-powered exam systems, institutional ERPs, and healthcare
              management platforms. My core expertise lies in Next.js,
              TypeScript, backend APIs, authentication systems, and database
              design.
            </p>
          </section>
          <br />

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {[
              {
                Icon: FaGithub,
                href: "https://github.com/moiqbalbbdniit",
                color: "hover:text-gray-900 dark:hover:text-white",
              },
              {
                Icon: FaLinkedin,
                href: "https://linkedin.com/in/YOUR_LINKEDIN",
                color: "hover:text-blue-600",
              },
              {
                Icon: FaTwitter,
                href: "https://twitter.com/YOUR_TWITTER",
                color: "hover:text-sky-500",
              },
            ].map(({ Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`text-3xl text-gray-400 transition-colors duration-300 ${color}`}
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 2. Tech Stack Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full mb-20"
        >
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Powering My Builds
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  {skill.icon}
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 3. Value Proposition Cards (Replacing generic bio) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-16">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl mb-4 bg-gray-100 dark:bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 4. GitHub Stats / Readme */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl"
        >
          <ReadmeDisplay />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
