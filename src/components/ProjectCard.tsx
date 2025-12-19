import React from 'react';
import './Components.css';

interface ProjectCardProps {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, description, tags }) => {
  return (
    <button className="project-card">
      <h3 className="project-title"><a href={link} target="_blank">{title}</a></h3>
      <p className="project-desc">{description}</p>
      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </button>
  );
};

export default ProjectCard;
