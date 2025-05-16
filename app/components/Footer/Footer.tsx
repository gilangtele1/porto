"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-6 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Kiri */}
        <p className="text-sm text-gray-500">
          © 2025 Gilang Nur Haliz. All rights reserved.
        </p>

        {/* Kanan */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaTelegram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
