import React from 'react';
import ProjectCard from './ProjectCard';
import './Components.css';

const Projects: React.FC = () => {
    const projects = [
        {
            title: "Terrain Generation",
            link: "https://www.roblox.com/games/102721973832379",
            description: "A dynamic terrain generation system with mountains, deserts, and craters.",
            tags: ["Roblox-TS", "Roblox Studio"]
        },
        {
            title: "Car Derby",
            link: "https://www.roblox.com/games/108884702197874",
            description: "Remake of a classic car destruction game. Still currently in development.",
            tags: ["Roblox Studio", "Luau", "SSA"]
        },
        {
            title: "Tycoon Creator",
            link: "https://www.roblox.com/games/99681937282481",
            description: "A new take on the tycoon genre. Build your own tycoon however you desire!",
            tags: ["Roblox Studio", "Nevermore Engine", "Open Source"]
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">Latest Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
