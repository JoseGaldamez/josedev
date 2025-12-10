'use client';

import React, { useState } from 'react';
import { projects } from '@/data/projects';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectCategory } from '@/types/project';

type FilterType = 'all' | ProjectCategory;

export const ProjectsHomeSection = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredProjects = activeFilter === 'all' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    const filters: { value: FilterType; label: string }[] = [
        { value: 'all', label: 'Todos' },
        { value: 'mobile', label: 'Móviles' },
        { value: 'webapp', label: 'Web Apps' },
        { value: 'other', label: 'Otros' }
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-24">
            <h2 className="text-4xl md:text-5xl font-thin text-white/70 mb-4">
                Proyectos
            </h2>
            <p className="text-xl text-white/40 mb-8">
                Algunos de los proyectos en los que he trabajado, desde aplicaciones móviles hasta soluciones web empresariales.
            </p>
            
            <hr className="border-gray-600 border-t my-10" />

            {/* Filtros */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
                {filters.map((filter) => (
                    <button
                        key={filter.value}
                        onClick={() => setActiveFilter(filter.value)}
                        className={`
                            px-6 py-2.5 rounded-lg font-medium transition-all duration-300
                            ${activeFilter === filter.value
                                ? 'bg-white text-black shadow-lg shadow-white/20 scale-105'
                                : 'bg-zinc-900 text-white/70 hover:text-white border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800'
                            }
                        `}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>

            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filteredProjects.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index}
                    />
                ))}
            </div>

            {/* Mensaje cuando no hay proyectos */}
            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-white/40 text-lg">
                        No hay proyectos en esta categoría aún.
                    </p>
                </div>
            )}
        </div>
    );
};
