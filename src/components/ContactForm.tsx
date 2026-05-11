"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { HiCheckCircle, HiExclamationCircle } from "react-icons/hi2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setStatus("success");
      setMessage("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-3 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {/* Name Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
          required
          className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-black placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-black transition"
        />
      </motion.div>

      {/* Email Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-black placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-black transition"
        />
      </motion.div>

      {/* Message Input */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold mb-2 text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          required
          rows={6}
          className="w-full bg-transparent border-b border-gray-300 py-2 text-sm text-black placeholder:text-sm placeholder-gray-400 focus:outline-none focus:border-black transition"
        />
      </motion.div>

      {/* Status Message */}
      {message && (
        <motion.div
          className={`flex items-center gap-3 p-4 rounded-lg ${
            status === "success"
              ? "bg-green-500/10 border border-green-500/30 text-green-300"
              : "bg-red-500/10 border border-red-500/30 text-red-300"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {status === "success" ? (
            <HiCheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <HiExclamationCircle className="w-5 h-5 flex-shrink-0" />
          )}
          <span>{message}</span>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === "loading"}
        className="bg-black text-white px-10 py-4 text-sm uppercase font-semibold tracking-wider hover:bg-gray-800 transition"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {status === "loading" ? (
          <>
            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
