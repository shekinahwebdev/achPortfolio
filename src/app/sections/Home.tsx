"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight, HiBars3 } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative flex flex-col justify-between bg-white border text-dark-950 px-6 sm:px-10 lg:px-14 py-6 lg:py-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-between text-dark-950/90">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="text-3xl font-black tracking-tight"
            >
              GK.
            </motion.div>

            <button
              type="button"
              aria-label="Open navigation"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(true)}
              className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-none border border-dark-950/15 text-dark-950"
            >
              {isMenuOpen ? (
                <HiX className="w-5 h-5" />
              ) : (
                <HiBars3 className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="max-w-xl pt-10 lg:pt-0 lg:-translate-y-8">
            <motion.p
              className="mb-5 text-sm sm:text-base font-extrabold uppercase tracking-[0.35em] text-blue-500"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Graphic Designer
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[0.95] tracking-tight text-dark-950"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              I&apos;m Gideon
              <br />
              Kanneh
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg text-base sm:text-lg leading-8 text-dark-900/70"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
            >
              I design brand identities, campaigns, and polished digital
              experiences that feel editorial, modern, and memorable.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
            >
              <motion.button
                className="inline-flex items-center gap-3 bg-blue-500 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg shadow-black/10 transition-transform"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-3"
                >
                  View My Work
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.button>

              <motion.button
                className="inline-flex items-center gap-3 border border-dark-950/10 bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-dark-950 transition-transform"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-3"
                >
                  Contact Me
                  <HiArrowRight className="w-4 h-4" />
                </Link>
              </motion.button>
            </motion.div>
          </div>

          <motion.p
            className="text-xs sm:text-sm text-dark-900/45"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Copyright ©2026 All rights reserved | Designed for creative brands
          </motion.p>
        </motion.div>

        <motion.div
          className="relative min-h-[540px] lg:min-h-screen overflow-hidden bg-blue-500"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.26),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(120,96,13,0.18),_transparent_32%)]" />

          <motion.div
            className="absolute inset-0 flex items-end justify-center px-6 sm:px-10 lg:px-12"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18 }}
          >
            <div className="relative w-full max-w-[640px] h-full min-h-[540px] lg:min-h-screen">
              <Image
                src="/profile.jpeg"
                alt="Portrait of the graphic designer"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain object-bottom drop-shadow-[0_22px_40px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="hidden lg:block fixed inset-0 z-[120]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <motion.div
            className="absolute left-[500px] top-0 w-60 bg-white rounded-none p-8 shadow-2xl border border-gray-100"
            initial={{ scale: 0.98, x: 12, opacity: 0 }}
            animate={{ scale: 1, x: 0, opacity: 1 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <nav>
              <ul className="flex flex-col gap-8">
                {[
                  ["Home", "/"],
                  ["About", "/about"],
                  ["Services", "/services"],
                  ["Works", "/projects"],
                  ["Contact", "/contact"],
                ].map(([label, href], idx) => (
                  <li key={label}>
                    <Link
                      href={href as string}
                      className={`block text-left transition-colors ${idx === 0 ? "text-blue-500 font-extrabold text-sm" : "text-gray-700 font-semibold text-sm"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;
