"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheckCircle } from "react-icons/hi2";

const About = () => {
  const skills = [
    "Brand Identity",
    "UI/UX Design",
    "Logo Design",
    "Social Media Design",
    "Print Design",
    "Typography",
    "Color Theory",
    "Layout Design",
  ];

  const experience = [
    {
      year: "2023 - Present",
      role: "Senior Graphic Designer",
      company: "Creative Studio Co.",
      description: "Leading design projects for global brands",
    },
    {
      year: "2021 - 2023",
      role: "Graphic Designer",
      company: "Digital Agency",
      description: "Designed digital and print materials for diverse clients",
    },
    {
      year: "2019 - 2021",
      role: "Junior Designer",
      company: "Design Startup",
      description: "Started career creating UI/UX designs for mobile apps",
    },
  ];

  return (
    <section id="about" className="section bg-dark-900/50">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30" />
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
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate designer with a creative vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Profile Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-2xl blur-2xl" />

            {/* Image Container */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-purple-500/20 group cursor-pointer">
              {/* Placeholder Image */}
              <div className="w-full h-full bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 flex items-center justify-center relative group-hover:border-purple-500/50 transition-all">
                <motion.div
                  className="text-7xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  👤
                </motion.div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Badge */}
            <motion.div
              className="absolute -bottom-4 right-4 px-4 py-2 rounded-lg bg-dark-800 border border-purple-500/30 backdrop-blur-sm z-10"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm font-semibold text-white">8+ Years</p>
              <p className="text-xs text-gray-400">Experience</p>
            </motion.div>
          </motion.div>

          {/* Right - Bio and Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Bio */}
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm Alex Morgan, a passionate graphic designer with over 8 years
              of experience creating compelling visual narratives. My work spans
              brand identity, digital design, and print media, always with a
              focus on creativity and user experience.
            </p>

            <p className="text-lg text-gray-400 mb-8">
              I believe great design is more than aesthetics—it's about solving
              problems, telling stories, and creating meaningful connections
              between brands and their audiences.
            </p>

            {/* Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4">Skills & Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2 p-3 rounded-lg bg-dark-800/50 border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <HiCheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span className="text-sm font-medium group-hover:text-purple-300 transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Collaborate
            </motion.a>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          className="mt-20 pt-20 border-t border-purple-500/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12">Experience</h3>

          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-purple-600 to-transparent" />

            {experience.map((item, index) => (
              <motion.div
                key={index}
                className="pl-6 md:pl-24 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 border-2 border-dark-950 hidden md:block" />

                <div className="p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 bg-dark-800/50 transition-all hover:bg-dark-800/80">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-lg font-bold">{item.role}</h4>
                    <span className="text-sm text-purple-400 font-semibold">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-purple-300 font-medium mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
