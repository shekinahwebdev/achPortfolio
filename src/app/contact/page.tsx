"use client";

import ContactForm from "@/src/components/ContactForm";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

const Contact = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2">
            <Link
              href="/"
              className="text-sm text-black font-semibold uppercase"
            >
              Home /
            </Link>

            <Link
              href="/contact"
              className="text-sm text-black font-semibold uppercase  text-[#123788]"
            >
              Contact
            </Link>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl lg:text-4xl font-extrabold text-black mt-8"
          >
            Contact us
          </motion.h2>
        </div>

        {/* Main Container */}
        <motion.div
          className="grid lg:grid-cols-2 bg-gray-50 border border-gray-200 my-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Side */}
          <div className="p-10 md:p-14">
            <h3 className="text-2xl font-bold text-black mb-4">Contact us</h3>

            <p className="text-gray-500 text-md mb-12">
              We’re open for any suggestion or just to have a chat
            </p>
            {/* Contact Form */}
            <ContactForm />
          </div>

          {/* Right Side Image */}
          <div className="bg-[#efefef] border-t lg:border-t-0 lg:border-l border-gray-200 flex items-center justify-center min-h-[400px]">
            <img
              src="/profile.jpeg"
              alt="Map"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        {/* Social Links */}
        <div className="mt-16">
          <h4 className="text-2xl font-bold text-black mb-8">Follow me here</h4>

          <div className="flex flex-wrap gap-6">
            {[
              {
                name: "WhatsApp",
                href: "https://wa.me/0556007170",
                icon: FaWhatsapp,
              },
              {
                name: "TikTok",
                href: "https://www.tiktok.com/@acheva.graphix?_r=1&_t=ZS-96HpAwCpJWS",
                icon: SiTiktok,
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/gideon-kanneh-b66859400/",
                icon: FaLinkedinIn,
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/achevagraphix?igsh=MXVxYWx1Z3dpNjF3MA==",
                icon: FaInstagram,
              },
            ].map((s) => {
              const Icon = s.icon as any;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white text-black hover:bg-gray-100 transition"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
