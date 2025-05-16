"use client";

import { motion } from "framer-motion";
import { ExpandableCardDemo } from "./Experience";

export default function ExperienceSection() {
  return (
    <section className="w-full bg-white dark:bg-black px-4 md:px-8 py-12">
      {/* Judul Atas */}
      <motion.p
        initial={{ opacity: 0, y: 50 }} // dari bawah
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="tracking-widest text-2xl justify-start text-orange-500 dark:text-blue-400 mb-3"
      >
        Experience
      </motion.p>

      {/* Dua Kolom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }} // dari bawah
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto flex flex-col md:flex-row gap-12"
      >
        {/* Kiri */}
        <div className="w-full md:w-1/3 space-y-4">
          <h2 className="text-5xl font-bold text-blue-600 dark:text-white">
            History work
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            I’ve contributed to meaningful projects that have helped me grow my
            skills and shape my professional experience.
          </p>
        </div>

        {/* Kanan */}
        <div className="w-full md:w-2/3">
          <ExpandableCardDemo />
        </div>
      </motion.div>
    </section>
  );
}
