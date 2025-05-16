"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./card3d";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          mgilangnurhaliz
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-400"
        >
          Your message is signed, sent, and sealed on the TON Blockchain —
          publicly accessible and immutable.
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src="/assets/TONL.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-end items-center mt-20">
          <CardItem
            translateZ={20}
            translateX={40}
            as="a" // Ganti jadi anchor tag
            href="https://ton.org/docs" // URL dokumentasi TON
            target="_blank" // Buka di tab baru
            rel="noopener noreferrer" // Keamanan link eksternal
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
          >
            Read Doc
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
