"use client";

import { FaTelegram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function TouchMe() {
  return (
    <div className="w-full h-[400px] bg-gif bg-cover bg-center flex flex-col items-center justify-center text-white px-4 text-center">
      <h2 className="text-5xl text-blue-600 font-bold mb-6">Get in touch</h2>
      <p className="text-m text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl">
        My inbox is always open. Whether you have a project or just want to say
        hi, I would love to hear from you. Feel free to contact me and I'll get
        back to you.
      </p>

      <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            href: "https://t.me/yourusername",
            label: "Telegram",
            icon: <FaTelegram size={24} />,
          },
          {
            href: "mailto:you@example.com",
            label: "Email",
            icon: <FaEnvelope size={24} />,
          },
          {
            href: "https://linkedin.com/in/yourprofile",
            label: "LinkedIn",
            icon: <FaLinkedin size={24} />,
          },
          {
            href: "https://github.com/yourusername",
            label: "GitHub",
            icon: <FaGithub size={24} />,
          },
        ].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-28 h-28 rounded-xl flex flex-col items-center justify-center
              bg-white/20 backdrop-blur-xl
              border border-white/30
              hover:scale-105 transition-transform duration-300
              text-black
            "
          >
            {icon}
            <span className="mt-2 text-sm">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
