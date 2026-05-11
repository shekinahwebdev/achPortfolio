import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceCarousel({
  experience,
}: {
  experience: any[];
}) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % experience.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + experience.length) % experience.length);
  };

  const item = experience[index];

  return (
    <div className="mt-20 flex flex-col items-center">
      {/* CARD AREA */}
      <div className="relative w-full max-w-2xl h-[320px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white border p-8 shadow-sm max-w-[400px]"
          >
            <p className="text-blue-500 font-bold uppercase tracking-wider">
              {item.year}
            </p>

            <h3 className="text-2xl font-bold mt-5 text-gray-900">
              {item.role}
            </h3>

            <p className="text-lg font-semibold text-gray-600 mt-2">
              {item.company}
            </p>

            <p className="text-gray-500 leading-8 mt-6">{item.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-6 mt-8">
        <button
          onClick={prev}
          className="px-5 py-2 border rounded hover:bg-gray-100"
        ></button>

        <button
          onClick={next}
          className="px-5 py-2 bg-black text-white rounded hover:opacity-80"
        ></button>
      </div>
    </div>
  );
}
