import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Youtube, Instagram, Facebook, Mail, Heart } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            name: 'YouTube', 
            icon: Youtube, 
            url: 'https://www.youtube.com/@josegaldamez-dev',
            color: 'hover:text-red-500'
        },
        { 
            name: 'LinkedIn', 
            icon: Linkedin, 
            url: 'https://www.linkedin.com/in/josegaldamezdev',
            color: 'hover:text-blue-500'
        },
        { 
            name: 'GitHub', 
            icon: Github, 
            url: 'https://github.com/JoseGaldamez',
            color: 'hover:text-white'
        },
        { 
            name: 'Instagram', 
            icon: Instagram, 
            url: 'https://www.instagram.com/josegaldamezdev',
            color: 'hover:text-pink-500'
        },
        { 
            name: 'Facebook', 
            icon: Facebook, 
            url: 'https://www.facebook.com/josegaldamezdev',
            color: 'hover:text-blue-600'
        }
    ];

    const footerLinks = [
        {
            title: 'Navegación',
            links: [
                { label: 'Inicio', href: '/' },
                { label: 'Sobre mí', href: '/about' },
                { label: 'Blog', href: '/blog' },
            ]
        },
        {
            title: 'Recursos',
            links: [
                { label: 'Cursos', href: '/courses' },
                { label: 'Contacto', href: '/contact' },
            ]
        }
    ];

    return (
        <footer className="bg-[#03060c] opacity-100 border-t border-white/5" style={{ position: 'relative', zIndex: 95 }} >
            <div className="max-w-6xl mx-auto px-4 py-32">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            José Galdámez
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Desarrollador Fullstack especializado en crear aplicaciones web y móviles modernas.
                        </p>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                            <Mail className="h-4 w-4" />
                            <a 
                                href="mailto:contacto@josegaldamez.dev" 
                                className="hover:text-white/80 transition-colors"
                            >
                                contacto@josegaldamez.dev
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-white font-semibold mb-4">
                                {section.title}
                            </h4>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link 
                                            href={link.href}
                                            className="text-white/60 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-zinc-800 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-white/50 ${social.color} transition-all duration-300 hover:scale-110`}
                                    aria-label={social.name}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>

                    {/* Copyright */}
                    <div className="text-white/40 text-sm text-center md:text-right">
                        <p className="flex items-center gap-2 justify-center md:justify-end">
                            © {currentYear} José Galdámez. Hecho con 
                            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
                            desde Honduras
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
