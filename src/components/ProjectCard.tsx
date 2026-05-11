"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  index?: number;
}

const ProjectCard = ({
  image,
  title,
  category,
  description,
  link = "#",
  index = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative h-96 rounded-lg overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.9 : 0.6 }}
          transition={{ duration: 0.3 }}
        />

        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Category Badge */}
        <motion.div
          className="inline-flex w-fit mb-4 px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/50 text-xs font-semibold text-purple-300"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isHovered ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {category}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Link Button */}
        <motion.a
          href={link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-pink-400 transition-colors group/link"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
        >
          View Project
          <HiArrowTopRightOnSquare className="w-4 h-4 group-hover/link:rotate-45 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-b-[40px] border-l-transparent border-b-purple-500/30 group-hover:border-b-purple-500/60 transition-colors"
        animate={isHovered ? { rotateZ: -45 } : { rotateZ: 0 }}
      />
    </motion.div>
  );
};

export default ProjectCard;
