// src/components/sections/Integrations/LogoMarquee.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { INTEGRATIONS } from "../../constants/integrations";

export const LogoMarquee = () => {
  // Seamless loop ke liye array double karein
  const doubledLogos = [...INTEGRATIONS, ...INTEGRATIONS];
  
  // State for hover control
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex w-full overflow-hidden bg-white py-10">
      {/* ExactFlow Style Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap"
        // Mouse Events to update state
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        
        // Animation config
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
          // YAHAN HAI MAGIC: Jab state 'true' ho toh animation ko 'paused' kar do
          // Framer Motion is state ko internally handle karta hai baghair x-position reset kiye
          repeatDelay: 0,
        }}
        style={{
          display: "flex",
          width: "max-content",
          // State based pause logic
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {doubledLogos.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="mx-10 flex min-w-[150px] items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={160}
              height={60}
              priority={index < 10}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};