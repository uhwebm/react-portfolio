"use client";
import React from 'react';
import { ProjectCard, Project } from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";

interface WorkContentProps {
  projects: Project[];
}

export default function WorkContent({ projects }: WorkContentProps) {
    return (
        <section className="pt-32 pb-20 px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h1 className="text-4xl font-serif text-white md:text-6xl mb-6">All Projects</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto">
                        A collection of digital experiences, games, and open source contributions.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center text-sm font-medium text-neutral-500 italic"
                >
                    + many, many more...
                </motion.p>
            </div>
        </section>
    );
}
