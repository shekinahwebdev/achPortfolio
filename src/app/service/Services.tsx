"use client";

import ServiceCard from "@/src/components/ServiceCard";
import { motion } from "framer-motion";

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
      title: "UI/UX Design",
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
      title: "Web Design",
      description:
        "Beautiful, responsive website designs that convert visitors into customers",
    },
  ];

  return (
    <section id="services" className="section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30 -translate-y-1/2" />
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
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive design solutions tailored to your needs
          </p>
        </motion.div>

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

        {/* CTA Section */}
        <motion.div
          className="mt-20 p-12 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-600/10 via-pink-600/5 to-purple-600/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Background blur */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 blur-xl" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Don't see what you're looking for?
            </h3>
            <p className="text-gray-300 mb-8">
              I offer custom design solutions for any project. Let's discuss
              your unique needs and find the perfect design solution together.
            </p>
            <motion.a
              href="#contact"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
