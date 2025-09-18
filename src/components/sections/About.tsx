"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants for scroll reveal
  const revealVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-blue-500 mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold">
                Backend Developer with <span className="text-blue-500">4 years</span> of experience
              </h3>

              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Driven Backend Developer with expertise in building and maintaining robust backend systems.
                  Specialized in PHP, JavaScript, Laravel, Node.js, Vue.js, SQL, and NoSQL databases.
                </p>
                <p>
                  I have a proven ability to collaborate effectively with cross-functional teams to deliver
                  high-quality features on time. I&apos;m eager to contribute to a fast-paced environment and
                  continuously learn new technologies.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div>
                  <h4 className="font-medium">Name:</h4>
                  <p className="text-gray-600 dark:text-gray-300">AbdulAlim Mohamed</p>
                </div>
                <div>
                  <h4 className="font-medium">Email:</h4>
                  <p className="text-gray-600 dark:text-gray-300">abdoleemos200@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium">Location:</h4>
                  <p className="text-gray-600 dark:text-gray-300">Cairo, Egypt</p>
                </div>
                <div>
                  <h4 className="font-medium">Languages:</h4>
                  <p className="text-gray-600 dark:text-gray-300">Arabic, English, German (Beginner)</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-500 pl-4 py-2">
                    <h4 className="font-medium">Computer Science</h4>
                    <p className="text-gray-600 dark:text-gray-300">The High Institute of computer science and information systems</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2015 - 2019</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Current Position</h3>
                <div className="border-l-2 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium">Backend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-300">Hashstudio Solutions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sep 2021 - Present</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
