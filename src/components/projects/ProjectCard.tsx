'use client';

import React from 'react';
import { Project } from '@/types/project';
import { ExternalLink, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <div 
            className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-600 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-900/50 hover:-translate-y-2"
            style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
        >
            {/* Efecto de brillo al hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* Imagen del proyecto */}
            <div className="relative h-48 bg-gradient-to-br from-black to-gray-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-10">
                   <img src={project.image} alt={project.title} />
                </div>
                {/* Badge de categoría */}
                <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-sm text-white border-zinc-700">
                        {project.category === 'mobile' ? 'Móvil' : project.category === 'webapp' ? 'Web App' : 'Otro'}
                    </Badge>
                </div>
            </div>

            {/* Contenido */}
            <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {project.title}
                </h3>
                
                <p className="text-white/60 text-sm mb-4 line-clamp-2 group-hover:text-white/70 transition-colors">
                    {project.description}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                        <span 
                            key={i}
                            className="text-xs px-2 py-1 bg-zinc-800/50 text-white/70 rounded border border-zinc-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-white/50">
                            +{project.technologies.length - 3}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm px-4 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded transition-all duration-300"
                        >
                            <ExternalLink className="h-4 w-4" />
                            <span>Ver sitio</span>
                        </a>
                    )}
                    {project.appLink && (
                        <a
                            href={project.appLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm px-4 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-zinc-700 hover:border-zinc-500 rounded transition-all duration-300"
                        >
                            <Smartphone className="h-4 w-4" />
                            <span>Ver app</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};
