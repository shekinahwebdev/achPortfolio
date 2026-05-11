"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const ServiceCard = ({
  icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      className="p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 bg-dark-800/50 hover:bg-dark-800/80 transition-all duration-300 group overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(168, 85, 247, 0.1)",
      }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:via-pink-600/10 group-hover:to-purple-600/10 transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-purple-400 group-hover:text-pink-400 transition-colors text-2xl">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>

      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
