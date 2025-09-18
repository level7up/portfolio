"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Claimizer Real Estate",
      description: "Website for managing real estates in United Arab Emirates",
      link: "https://claimizer.com",
      category: "web",
      icon: "🏢"
    },
    {
      title: "Gdawel",
      description: "Multi-Tenancy ERP System using multi tenancy",
      link: "https://gdawel.app",
      category: "erp",
      icon: "📊"
    },
    {
      title: "Pasma",
      description: "HRM System for managing employees using multi databases",
      link: "https://pasma.hashstudio.dev",
      category: "hrm",
      icon: "👥"
    },
    {
      title: "Khurdah",
      description: "Website to manage scrap auctions",
      link: "https://khurdahapp.com",
      category: "web",
      icon: "🔨"
    },
    {
      title: "EYE Tracker",
      description: "Web application for managing eyes clinics",
      link: "https://eyetracker.hashstudio.dev",
      category: "healthcare",
      icon: "👁️"
    },
    {
      title: "Etamen Mental Health",
      description: "App for meeting with psychiatrists",
      link: "#",
      category: "healthcare",
      icon: "🧠"
    },
    {
      title: "Check-in",
      description: "Tourism app for world cup 2022",
      link: "#",
      category: "tourism",
      icon: "✈️"
    },
    {
      title: "Mazaji FM",
      description: "FM Radio App in Qatar",
      link: "#",
      category: "entertainment",
      icon: "🎵"
    },
    {
      title: "EasyCut",
      description: "PHP Backend for a barber shop reservation app in Germany",
      link: "#",
      category: "service",
      icon: "✂️"
    },
    {
      title: "M3loma",
      description: "Full website and dashboard (NextJS) with vibe coding",
      link: "https://ma3loma-front.vercel.app",
      category: "web",
      icon: "📱"
    },
    {
      title: "Darabny",
      description: "App for trainers and trainees to manage fitness plans",
      link: "https://darabny.com",
      category: "fitness",
      icon: "💪"
    }
  ];

  const filters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web" },
    { id: "erp", name: "ERP" },
    { id: "healthcare", name: "Healthcare" },
    { id: "service", name: "Service" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-indigo-950/20"></div>
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern"></div>
      </div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              My Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 w-20 bg-blue-500 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              A collection of my professional work and personal projects across various industries and technologies.
            </motion.p>
          </div>

          {/* Filter buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                animate={{
                  backgroundColor: activeFilter === filter.id ? "var(--accent)" : "var(--card)",
                  color: activeFilter === filter.id ? "white" : "var(--foreground)",
                  scale: activeFilter === filter.id ? 1.05 : 1
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-2 rounded-full text-sm font-medium shadow-sm"
              >
                {filter.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{
                  y: -5,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05
                }}
                onHoverStart={() => setHoveredProject(index)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: hoveredProject === index ? 1.2 : 1,
                      rotate: hoveredProject === index ? 10 : 0
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <span className="text-6xl">{project.icon}</span>
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 to-transparent opacity-70"></div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    animate={{
                      y: hoveredProject === index ? 0 : 10,
                      opacity: hoveredProject === index ? 1 : 0.7
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  </motion.div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 h-12 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-medium">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    {project.link !== "#" && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
                        whileHover={{ x: 3 }}
                      >
                        Visit Site
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal projects section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Personal Projects & Packages</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4 mt-1 text-blue-500 bg-blue-100 dark:bg-blue-800/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Openrouter-client</h4>
                    <p className="text-gray-600 dark:text-gray-300">Composer package for integrating openrouter AI models with Laravel</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4 mt-1 text-purple-500 bg-purple-100 dark:bg-purple-800/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Dashboard Metronic</h4>
                    <p className="text-gray-600 dark:text-gray-300">A composer package with admins, users and roles</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4 mt-1 text-indigo-500 bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">CMS</h4>
                    <p className="text-gray-600 dark:text-gray-300">Composer package to manage any project CMS easily</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="mr-4 mt-1 text-green-500 bg-green-100 dark:bg-green-800/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      <a href="https://github.com/level7up/trello-mcp" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                        Trello-mcp
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Node MCP server for Trello with Cursor</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
