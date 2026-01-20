import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'smol-toml';

export interface Project {
    title: string;
    link: string;
    description: string;
    tags: string[];
    image: string;
    featured?: boolean;
}

export async function getProjects(): Promise<Project[]> {
    const projectsDir = path.join(process.cwd(), 'content/work');
    
    try {
        const files = await fs.readdir(projectsDir);
        const projects: Project[] = [];

        for (const file of files) {
            if (file.endsWith('.toml')) {
                const content = await fs.readFile(path.join(projectsDir, file), 'utf-8');
                const parsed = parse(content) as unknown as Project;
                projects.push(parsed);
            }
        }
        
        return projects.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });
    } catch (error) {
        console.error('Error reading projects:', error);
        return [];
    }
}

export async function getSelectedProjects(): Promise<Project[]> {
    const projects = await getProjects();
    return projects.filter(p => p.featured);
}
