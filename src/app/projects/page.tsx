"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { categories, projects } from "@/src/lib/constants";
import { HiX } from "react-icons/hi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);
  const itemsPerPage = 9;

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProjects.length / itemsPerPage),
  );

  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const categoryLabel = (category: string) =>
    category
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  const visibleProjects = paginatedProjects.length > 0 ? paginatedProjects : [];
  const pageKey = `${activeCategory}-${currentPage}`;

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb + Title */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="text-sm text-black font-semibold uppercase"
            >
              Home /
            </Link>

            <Link
              href="/projects"
              className="text-sm  text-[#123788] font-semibold uppercase"
            >
              Projects
            </Link>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-4xl font-extrabold text-black mt-8"
          >
            Projects
          </motion.h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-none border text-sm font-semibold capitalize transition ${
                activeCategory === category
                  ? "bg-[#123788] text-white"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {categoryLabel(category)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={pageKey}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
          >
            {visibleProjects.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden bg-gray-50 group cursor-zoom-in"
                onClick={() => setSelectedProject(p)}
              >
                <div className="aspect-[4/4] w-full bg-gray-100">
                  <img
                    src={p.image}
                    alt={"title" in p && p.title ? p.title : p.category}
                    className="w-full h-full object-cover block transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 border border-t-0 border-gray-100">
                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
                    {categoryLabel(p.category)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center mt-12 text-gray-500">
            No projects found for {categoryLabel(activeCategory)}.
          </div>
        )}

        {/* Pagination */}
        {filteredProjects.length > itemsPerPage && (
          <div className="flex justify-center mt-12 px-2 sm:px-0">
            <nav
              className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3"
              aria-label="Pagination"
            >
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded border flex items-center justify-center border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaArrowLeft size={9} />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded border border-gray-200 flex items-center justify-center font-semibold text-sm sm:text-base ${
                      pageNumber === currentPage
                        ? "bg-[#123788] text-white border-transparent"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaArrowRight size={9} />
              </button>
            </nav>
          </div>
        )}

        {/* Image Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 px-3 py-4 sm:px-4 sm:py-8 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="relative w-full max-w-5xl max-h-[92vh] bg-white shadow-2xl overflow-hidden rounded-none sm:rounded-md"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-none flex items-center justify-center bg-black/70 text-white text-lg leading-none hover:bg-black transition"
                  aria-label="Close image preview"
                >
                  <HiX size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>

                <div className="bg-gray-100 flex items-center justify-center p-2 sm:p-0">
                  <img
                    src={selectedProject.image}
                    alt={
                      "title" in selectedProject && selectedProject.title
                        ? selectedProject.title
                        : selectedProject.category
                    }
                    className="w-full h-auto max-h-[78vh] sm:max-h-[85vh] object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
