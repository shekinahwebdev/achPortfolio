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
      className="p-8 flex items-center justify-center rounded-none border transition-all text-center duration-300 group overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0.1, 0.1)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center flex-col">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 flex items-center justify-center transition-colors text-2xl text-black">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-black transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 transition-colors">{description}</p>
      </div>

      {/* Hover line effect */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#123788] group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};

export default ServiceCard;
