"use client";
import React, { useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  const color = useMotionValue("#13FFAA");
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  useEffect(() => {
    const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.div
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-200"
    >
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
