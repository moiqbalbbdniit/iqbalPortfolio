"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdOutlineWork } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  achievements: {
    text: string;
    highlights: string[];
  }[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Sep 2025 - Dec 2025 ",
    title: "Full Stack Developer",
    company: "AlgoForge Studios",
    location: "Noida, India", // or Remote based on your preference
    achievements: [
      {
        text: "Spearheaded the development of an AI-driven Automated Exam System that leverages OpenAI's GPT models to generate subject-specific question papers instantly. Implemented a secure, self-hosted testing environment with automated grading pipelines, reducing faculty administrative workload by 60% and ensuring evaluation consistency.",
        highlights: ["AI-driven", "OpenAI", "automated grading", "60%"]
      },
      {
        text: "Architected a scalable Learning Management System (LMS) tailored for internal training, featuring granular Role-Based Access Control (RBAC) for admins, instructors, and students. Integrated secure video streaming, assignment submission portals, and real-time progress tracking, resulting in a 30% increase in course engagement.",
        highlights: ["Learning Management System", "RBAC", "video streaming", "30%"]
      },
      {
        text: "Engineered a CGPA Prediction System utilizing Python-based Machine Learning regression algorithms to forecast student performance trends. Built an intuitive faculty dashboard that visualizes historical academic data to identify at-risk students early, enabling data-driven intervention strategies.",
        highlights: ["CGPA Prediction", "Machine Learning", "dashboard", "intervention"]
      },
      {
        text: "Optimized backend infrastructure by implementing Redis caching and refactoring REST API endpoints, which decreased server response latency by 40% and enabled the platform to handle concurrent traffic spikes during high-volume exam sessions.",
        highlights: ["Redis caching", "REST API", "latency", "40%"]
      }
    ]
  }
];

const ExperienceCard = ({ exp, index }: { exp: ExperienceItem; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlightText = (text: string, highlights: string[]) => {
    let highlightedText = text;
    highlights.forEach(keyword => {
      // Escape special characters to prevent regex errors
      const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escapedKeyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="text-emerald-500 font-semibold">$1</span>');
    });
    return <p dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <div className={`relative ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
      index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
    }`}>
      <motion.div 
        className="bg-white dark:bg-gray-800/40 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm"
        whileHover={{ y: -5 }}
      >
        {/* Card Header */}
        <div className="p-6">
          {/* Period Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium mb-4">
            <span>{exp.period}</span>
            <BsArrowRight className="text-xs" />
          </div>

          {/* Title & Company */}
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
            {exp.title}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
            <span className="font-medium">{exp.company}</span>
            <span className="hidden sm:block">•</span>
            <span className="text-gray-500">{exp.location}</span>
          </div>

          {/* Achievement Preview */}
          <div className={`relative ${isExpanded ? 'hidden' : 'block'}`}>
            <div className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed line-clamp-2">
              {highlightText(exp.achievements[0].text, exp.achievements[0].highlights)}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-gray-800/40 to-transparent" />
          </div>
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-100 dark:border-gray-700/50"
            >
              <div className="p-6 space-y-4">
                {exp.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-2 flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 group-hover:ring-4 ring-emerald-500/20 transition-all duration-300" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed">
                      {highlightText(achievement.text, achievement.highlights)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expand Button */}
        <div className="border-t border-gray-100 dark:border-gray-700/50">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-6 py-3 flex items-center justify-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors duration-300"
          >
            {isExpanded ? (
              <>Show Less <FiChevronUp className="text-lg" /></>
            ) : (
              <>Read More <FiChevronDown className="text-lg" /></>
            )}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-500 mb-4">
          <MdOutlineWork className="text-xl" />
          <span className="text-sm font-semibold">Work Experience</span>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 transform -translate-x-1/2" />

        {/* Experience Cards */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg transform -translate-x-1/2 z-10">
                <div className="absolute inset-0 rounded-full bg-white dark:bg-gray-900 scale-[0.6]" />
              </div>

              <ExperienceCard exp={exp} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;