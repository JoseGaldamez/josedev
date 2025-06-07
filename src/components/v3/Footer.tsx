import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const Footer = () => (
    <footer className="w-full bg-[#296973] text-white pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="mb-4 md:mb-0 text-center md:text-left">
                <h4 className="text-xl font-bold mb-2">José Galdámez</h4>
                <p className="text-sm text-gray-200">
                    Fullstack Developer | Apasionado por la tecnología y el aprendizaje continuo.
                </p>
                <p className="text-xs text-gray-300 mt-2">
                    &copy; {new Date().getFullYear()} José Galdámez. Todos los derechos reservados.
                </p>
            </div>
            <div className="flex flex-col gap-2">
                <span className="font-semibold mb-1">Sígueme</span>
                <div className="flex gap-4 text-2xl">
                    <a href="https://www.linkedin.com/in/josegaldamezdev" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/josegaldamez" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-gray-300 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/josegaldamezdev" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
                        <FaTwitter />
                    </a>
                    <a href="mailto:josegaldamez1991@gmail.com" aria-label="Email" className="hover:text-red-300 transition-colors">
                        <FaEnvelope />
                    </a>
                </div>
            </div>

        </div>
    </footer>
);