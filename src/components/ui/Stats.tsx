"use client";
import { motion } from "framer-motion";

const stats = [
    { label: "Years of Experience", value: "7+" },
    { label: "Projects Shipped", value: "10+" },
    { label: "Plays", value: "25M+" },
];

export const Stats = () => {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-20">
      <div className="grid grid-cols-1 gap-8 divide-neutral-800 border-y border-white/5 py-12 md:grid-cols-3 md:divide-x md:border-y-0">
        {stats.map((stat, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <div className="text-4xl font-bold text-white md:text-5xl">{stat.value}</div>
                <div className="mt-2 text-sm text-neutral-500 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
        ))}
      </div>
    </section>
  );
};
