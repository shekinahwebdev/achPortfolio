"use client";

import ExperienceCarousel from "@/src/components/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const skills = [
    { name: "Adobe Photoshop", img: "/profile.jpeg" },
    { name: "Figma", img: "/figma.png" },
    { name: "Adobe Illustrator", img: "/illustrator.png" },
    { name: "Adobe Photoshop", img: "/photoshop.png" },
    { name: "Adobe Photoshop", img: "/photoshop.png" },
  ];

  const stats = [
    {
      number: "50+",
      label: "Happy Clients",
    },
    {
      number: "50+",
      label: "Projects Done",
    },
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "24/7",
      label: "Working Hours",
    },
  ];

  const experience = [
    {
      year: "2025 - Present",
      role: "Graphic Designer",
      company: "Acheva",
      description: "Leading design projects for global brands",
    },
    {
      year: "2025",
      role: "Freelance Graphic Designer",
      company: "Freelance",
      description: "Designed digital and print materials for diverse clients",
    },
  ];

  return (
    <section
      id="about"
      className="bg-white border min-h-screen px-6 lg:px-16 py-20"
    >
      {/* Breadcrumb */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2">
          <Link href="/" className="text-sm text-black font-semibold uppercase">
            Home /
          </Link>

          <Link
            href="/about"
            className="text-sm text-black font-semibold uppercase text-blue-500"
          >
            About
          </Link>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl lg:text-5xl font-extrabold text-black mt-8"
        >
          About Me
        </motion.h2>
      </div>

      {/* About Grid */}
      <div className="grid lg:grid-cols-2 gap-16 mt-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl lg:text-6xl font-extrabold leading-tight text-gray-900 mt-5">
            A Graphic Designer
          </h3>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            <span className="font-bold text-gray-900">
              Founder of Acheva Graphix
            </span>
            <br />I create modern visual identities and engaging digital
            experiences that blend creativity with strategy. My focus is helping
            brands stand out through impactful and meaningful design.
          </p>

          {/* Info */}
          <div className="grid sm:grid-cols-2 gap-8 mt-12">
            <div className="space-y-5">
              <p className="text-lg">
                <span className="font-bold text-black">Name:</span>{" "}
                <span className="text-blue-500 font-semibold">
                  Gideon Kanneh
                </span>
              </p>

              <p className="text-lg">
                <span className="font-bold text-black">Experience:</span>{" "}
                <span className="text-blue-500 font-semibold">1+ Years</span>
              </p>

              <p className="text-lg">
                <span className="font-bold text-black">Address:</span>{" "}
                <span className="text-blue-500 font-semibold">
                  Accra, Ghana
                </span>
              </p>
            </div>

            <div className="space-y-5">
              <p className="text-lg">
                <span className="font-bold text-black">Freelance:</span>{" "}
                <span className="text-blue-500 font-semibold">Available</span>
              </p>

              <p className="text-lg">
                <span className="font-bold text-black">Email:</span>{" "}
                <span className="text-blue-500 font-semibold break-all">
                  hello@gideondesign.com
                </span>
              </p>

              <p className="text-lg">
                <span className="font-bold text-black">Phone:</span>{" "}
                <span className="text-blue-500 font-semibold">
                  +233 55 600 7170
                </span>
              </p>
            </div>
          </div>

          {/* Skills Tags */}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 min-h-[240px] flex flex-col items-center justify-center shadow-md border border-gray-200"
            >
              <h3 className="text-3xl font-extrabold text-blue-500">
                {stat.number}
              </h3>

              <p className="mt-4 text-xl font-medium text-gray-800">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Logo section */}
      <div className="flex flex-col py-20">
        <h3 className="text-black text-center uppercase text-2xl">
          Company Logo
        </h3>
        <Image
          src="/acheva-logo.jpg"
          alt="Gideon Kanneh Logo"
          width={400}
          height={400}
          className="mx-auto mt-20"
        />
      </div>

      {/* Skills Section */}
      <div className="mt-32">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-bold text-blue-500">
            My Tools
          </p>
          <p className="text-2xl font-extrabold text-gray-900 mt-4">
            Skills & Expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold uppercase text-xl text-gray-800">
                  {skill.name}
                </h4>
                <Image
                  src={skill.img}
                  alt={skill.name}
                  width={40}
                  height={40}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-32">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm font-bold text-blue-500">
            Experience
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 mt-4">
            My Journey
          </h2>
        </div>
        <ExperienceCarousel experience={experience} />
      </div>
    </section>
  );
};

export default About;
