"use client";

import ContactForm from "@/src/components/ContactForm";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "hello@alexmorgan.com",
      href: "mailto:hello@alexmorgan.com",
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "New York, USA",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="section">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-pink-600/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Reach out and
            let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.label}
                href={info.href}
                className="p-8 rounded-lg border border-purple-500/20 bg-dark-800/50 hover:bg-dark-800/80 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-purple-400 group-hover:text-pink-400 transition-colors text-xl mt-1">
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                      {info.label}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Form Section */}
        <motion.div
          className="p-12 rounded-2xl border border-purple-500/20 bg-dark-800/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold mb-2">Send Me a Message</h3>
            <p className="text-gray-400">I typically respond within 24 hours</p>
          </div>

          <ContactForm />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 p-8 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-600/5 to-pink-600/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300">
            <span className="font-semibold">Availability:</span> Currently
            accepting new projects for Q3 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
