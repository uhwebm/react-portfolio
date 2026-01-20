"use client";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-200"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
