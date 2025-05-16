"use client";

import { useScroll, useTransform, motion } from "framer-motion";
export default function Navbar() {
  const { scrollY } = useScroll();

  const width = useTransform(scrollY, [0, 300], ["100%", "50%"]);
  const borderRadius = useTransform(scrollY, [0, 300], [10, 50]);
  const marginTop = useTransform(scrollY, [0, 300], [10, 10]);
  const paddingY = useTransform(scrollY, [0, 300], [13, 13]);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        width,
        borderRadius,
        marginTop,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto px-6 flex justify-between items-center backdrop-blur-md bg-white/30 shadow-md"
    >
      {/* Div 1: Logo */}
      <div className="text-xl font-bold text-blue-500">
        <img
          src="/assets/logo.png"
          alt="logou"
          className="w-10 h-10 object-cover"
        />
      </div>

      {/* Div 2: Menu */}
      <div className="flex gap-6 text-gray-700 font-medium text-l">
        <a href="#home" className="hover:text-blue-500 transition">
          Home
        </a>
        <a href="#project" className="hover:text-blue-500 transition">
          Project
        </a>
        <a href="#contact" className="hover:text-blue-500 transition">
          Contact
        </a>
      </div>

      {/* Div 3: Button */}
      <div id="ton-connect" />
    </motion.div>
  );
}
