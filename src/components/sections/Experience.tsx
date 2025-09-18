"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Hashstudio Solutions",
      period: "Sep 2021 - Present",
      description: "Developed and maintained robust full stack systems using PHP with the Laravel framework, ensuring high performance and scalability of web applications."
    },
    {
      title: "Backend Developer",
      company: "Falcon Portal",
      period: "Oct 2022 - Present",
      description: "Designed and implemented RESTful APIs to facilitate seamless communication between front-end and back-end systems, enabling efficient data exchange and manipulation."
    }
  ];

  // Scroll animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Work Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-blue-500 mx-auto"
            />
          </div>

          <div className="relative pt-8">
            {/* Timeline line */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-8 h-[calc(100%-2rem)] w-0.5 bg-blue-200 dark:bg-blue-800"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />

            {/* Experience items */}
            <motion.div
              className="space-y-16 md:space-y-24"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1/2 top-0 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 shadow-md"
                  />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pt-6 md:pt-0`}>
                    <motion.div
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <div className="flex items-center space-x-2 mt-1 mb-3">
                        <span className="text-blue-500">{exp.company}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
