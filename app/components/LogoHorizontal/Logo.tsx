"use client";

import Marquee from "react-fast-marquee";

export default function SponsorsMarquee() {
  const sponsors = [
    "TypeScript",
    "Python",
    "PHP",
    "NextJs",
    "ReactJs",
    "Laravel",
    "Flask",
    "Tailwind",
    "NodeJs",
    "Git",
    "Docker",
  ];

  return (
    <div>
      <Marquee gradient={true} speed={80}>
        {sponsors.map((name, idx) => (
          <span
            key={idx}
            className="flex items-center mr-20 text-l  text-gray-700 bg-gray-100 border rounded-xl shadow-sm px-2 py-2"
          >
            <img
              src={`/assets/Logo/${name}.png`}
              alt={`${name} logo`}
              className="w-7 h-7 mr-3 object-contain"
            />
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
