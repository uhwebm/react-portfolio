"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Config, getStatusColor } from "@/lib/config-client";

interface HeroProps {
    status: Config['status'];
}

export const Hero = ({ status }: HeroProps) => {
  const currentState = status[status.state];
  const colorClass = getStatusColor(currentState.color);
  
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-300 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${colorClass}`}></span>
            <span className={`relative inline-flex h-2 w-2 rounded-full ${colorClass}`}></span>
          </span>
          {currentState.label}
        </span>
      </motion.div>

      <h1 className="max-w-5xl text-5xl font-light leading-none tracking-tighter text-white md:text-7xl lg:text-8xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="block font-serif italic text-neutral-400 mb-2"
        >
          Crafting
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="font-sans font-bold block"
        >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">Digital</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">Experiences</span>
        </motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 max-w-lg text-lg text-neutral-400 font-light leading-relaxed md:text-xl"
      >
        Building fun, enjoyable experiences for people of all ages, one line of code at a time.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 flex gap-4"
      >
        <Link href="/work" className="group relative overflow-hidden rounded-full bg-white px-8 py-3 text-black transition-all hover:bg-neutral-200">
             <span className="relative z-10 flex items-center gap-2 font-bold font-sans text-sm tracking-wide">
                View Projects <ArrowRight size={16} />
             </span>
        </Link>
      </motion.div>
    </section>
  );
};
