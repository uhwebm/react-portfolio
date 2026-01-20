import React from "react";
import { Github, Mail, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-black/20 text-neutral-400 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-serif text-xl text-white">uhwebm</span>
          <p className="text-sm">Crafting digital experiences with code & native curiosity.</p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/uhwebm" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white"><Github size={20} /></a>
          <a href="https://www.youtube.com/@ivadsiuls" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white"><Youtube size={20} /></a>
          <a href="mailto:uhwebm.business@protonmail.com" className="transition-colors hover:text-white"><Mail size={20} /></a>
        </div>
        
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} uhwebm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
