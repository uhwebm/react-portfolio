"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface Project {
  title: string;
  link: string;
  description: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

interface ProjectCardProps extends Project {
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, description, tags, image, featured, index }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 md:flex-row"
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-0 top-0 z-10 rounded-bl-xl border-b border-l border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400 backdrop-blur-md">
           Featured
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-2/5 lg:w-1/3">
        <div className="absolute inset-0 bg-neutral-800">
             <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-10">
        <div>
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-2xl font-bold font-sans text-white group-hover:text-emerald-400 transition-colors">
                {title}
                </h3>
                <ArrowUpRight className="text-neutral-500 transition-colors group-hover:text-emerald-400" />
            </div>
            
            <p className="mb-6 text-neutral-400 leading-relaxed font-light">
            {description}
            </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs font-medium text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};
