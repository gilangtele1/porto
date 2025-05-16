"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Address } from "@ton/core";

interface Testimonial {
  name: string;
  message: string;
  utime: number;
}

export default function SimpleCarouselLayout() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const next = () => {
    resetTimeout();
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const prev = () => {
    resetTimeout();
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://tonapi.io/v2/blockchain/accounts/UQDYwb2h6aeCti27KZyLbS5cccpH5RM1pBB3omRkPUJRqFBy/transactions"
        );
        const json = await res.json();

        const filtered = json.transactions
          .map((tx: any) => {
            const raw = tx.in_msg?.source?.address;
            const text = tx.in_msg?.decoded_body?.text;
            const utime = tx.utime;

            if (raw && text && utime) {
              try {
                const name = Address.parse(raw).toString({ bounceable: false });
                return { name, message: text, utime };
              } catch {
                return null;
              }
            }
            return null;
          })
          .filter(Boolean);

        setTestimonials(filtered as Testimonial[]);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;

    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      next();
    }, 5000);

    return () => resetTimeout();
  }, [index, testimonials]);

  if (testimonials.length === 0) {
    return <div className="p-6">Loading testimonials...</div>;
  }

  const current = testimonials[index];

  const circleRadius = 36;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <div className="scroll-smooth w-full flex flex-col md:flex-row gap-8 mt-2 mb-20">
      {/* Left */}
      <div className="w-full md:w-1/4 pr-4 flex flex-col items-start">
        <h2 className="text-5xl text-blue-600 font-semibold mb-4">
          Community voice
        </h2>
        <p className="text-gray-600 ">
          Immutable thoughts from TON-based interactions.
        </p>
      </div>

      {/* Right */}
      <div className="w-full md:w-3/4 flex flex-col justify-between">
        <div className="w-full flex justify-center items-center min-h-[200px]">
          <div className="relative w-full max-w-xl min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white p-6 rounded shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16">
                    <img
                      src="/assets/ton.png"
                      alt="Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />

                    <svg
                      className="absolute top-0 left-0 w-16 h-16"
                      viewBox="0 0 80 80"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r={circleRadius}
                        fill="transparent"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                      />
                      <motion.circle
                        key={index + "-circle"}
                        cx="40"
                        cy="40"
                        r={circleRadius}
                        fill="transparent"
                        stroke="#2563eb"
                        strokeWidth="4"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 5, ease: "linear" }}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col w-full">
                    <h3 className="text-l mt-2 text-clack break-all">
                      {current.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {new Date(current.utime * 1000).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-base mt-4">
                    {current.message}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-end items-center mt-5">
          <button
            onClick={prev}
            disabled={testimonials.length === 0}
            className="text-6xl text-blue-600 hover:text-black transition disabled:opacity-50"
            aria-label="Previous"
          >
            ‹
          </button>
          <span className="text-orange-500 mt-2 mx-2 text-2xl font-semibold">
            {testimonials.length === 0 ? 0 : index + 1}/{testimonials.length}
          </span>
          <button
            onClick={next}
            disabled={testimonials.length === 0}
            className="text-6xl text-blue-600 hover:text-black transition disabled:opacity-50"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
