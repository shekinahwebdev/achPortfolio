"use client";

import ServiceCard from "@/src/components/ServiceCard";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  HiSparkles,
  HiPaintBrush,
  HiSquares2X2,
  HiRocketLaunch,
  HiBookOpen,
  HiClock,
} from "react-icons/hi2";

const Services = () => {
  const services = [
    {
      icon: <HiSparkles />,
      title: "Brand Identity Design",
      description:
        "Create cohesive visual identities including logos, color palettes, and brand guidelines",
    },
    {
      icon: <HiPaintBrush />,
      title: "Social Media Design",
      description:
        "Eye-catching graphics for Instagram, Facebook, LinkedIn, and other platforms",
    },
    {
      icon: <HiSquares2X2 />,
      title: "Product Design",
      description:
        "User-centered interface and experience design for web and mobile applications",
    },
    {
      icon: <HiRocketLaunch />,
      title: "Logo Design",
      description:
        "Memorable and versatile logos that represent your brand identity perfectly",
    },
    {
      icon: <HiBookOpen />,
      title: "Print Design",
      description:
        "Brochures, flyers, business cards, and other print collateral that impress",
    },
    {
      icon: <HiClock />,
      title: "Flyer & Poster Design",
      description:
        "Beautiful, responsive website designs that convert visitors into customers",
    },
  ];

  return (
    <section
      id="services"
      className="section bg-white border min-h-screen px-6 lg:px-16 py-20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2">
          <Link href="/" className="text-sm text-black font-semibold uppercase">
            Home /
          </Link>

          <Link
            href="/services"
            className="text-sm text-black font-semibold uppercase  text-[#123788]"
          >
            Services
          </Link>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-extrabold text-black mt-8"
        >
          What I Offer
        </motion.h2>
      </div>
      <div className="max-w-7xl mx-auto relative z-10 py-20">
        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
