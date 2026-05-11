"use client";

import ProjectCard from "@/src/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "branding", "digital", "print", "ui/ux"];

  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "Modern Brand Identity",
      category: "branding",
      description:
        "Complete brand identity system for a tech startup including logo, guidelines, and collateral",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "E-Commerce Platform",
      category: "ui/ux",
      description:
        "User-friendly e-commerce platform design with intuitive navigation and conversion optimization",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "Social Media Campaign",
      category: "digital",
      description:
        "Comprehensive social media design assets for a global lifestyle brand across all platforms",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "Print Collateral",
      category: "print",
      description:
        "Premium print materials including business cards, letterheads, and brochures for luxury brand",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "Packaging Design",
      category: "branding",
      description:
        "Innovative packaging design for sustainable consumer products that stands out on shelves",
    },
    {
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      title: "Mobile App Interface",
      category: "ui/ux",
      description:
        "Beautiful and functional mobile app interface design with micro-interactions and animations",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-dark-900/50">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore a selection of my recent design work
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50"
                  : "bg-dark-800 text-gray-300 hover:text-white border border-purple-500/20 hover:border-purple-500/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "ui/ux" ? "UI/UX" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard {...project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category
            </p>
          </motion.div>
        )}

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="btn-secondary inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View More Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
