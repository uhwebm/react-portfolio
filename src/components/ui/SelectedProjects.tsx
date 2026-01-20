"use client";
import React from 'react';
import { ProjectCard, Project } from './ProjectCard';
import { motion } from 'framer-motion';

interface SelectedProjectsProps {
    projects: Project[];
}

export const SelectedProjects = ({ projects }: SelectedProjectsProps) => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-serif text-white md:text-5xl mb-4">Selected Works</h2>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
