import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const FooterV4 = () => {
  return (
    <footer className="w-full bg-[#EBEBEB] text-[#253237] ">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sección principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">
              <span>José</span>
              <span className="text-[#7b7b7b]"> Galdámez</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desarrollador Fullstack apasionado por crear soluciones digitales innovadoras
              y experiencias de usuario excepcionales.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 text-[#7b7b7b]">Enlaces</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-sm">
                Inicio
              </a>
              <a href="/about" className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-sm">
                Sobre mí
              </a>
              <a href="/projects" className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-sm">
                Proyectos
              </a>
              <a href="/contact" className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-sm">
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto y redes */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4 text-[#7b7b7b]">Conecta conmigo</h4>
            <div className="flex justify-center md:justify-end gap-4 mb-4">
              <a
                href="https://linkedin.com/in/josegaldamezdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/josegaldamez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/josegaldamez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:josegaldamez.dev@gmail.com"
                className="text-gray-400 hover:text-[#7b7b7b] transition-colors text-xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
            <a
              href="mailto:josegaldamez1991@gmail.com"
              className="text-sm text-gray-400 hover:text-[#7b7b7b] transition-colors"
            >
              josegaldamez1991@gmail.com
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} José Galdámez. Todos los derechos reservados.
            </p>
            <p className="text-xs text-gray-400">
              Desarrollado con ❤️ y Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
