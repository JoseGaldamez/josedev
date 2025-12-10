export type ProjectCategory = 'mobile' | 'webapp' | 'other';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: ProjectCategory;
    image: string;
    link?: string;
    appLink?: string;
    technologies: string[];
}
