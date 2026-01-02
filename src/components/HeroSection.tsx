'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { 
  ChevronRight, 
  Globe, 
  Zap, 
  Shield, 
  Hexagon, 
  Code2, 
  Cpu, 
  Terminal, 
  Sparkles,
  ExternalLink,
  Github,
  Mail,
  ArrowDown,
  Layers,
  Box,
  Database,
  Smartphone,
  Server,
  Cloud,
  Layout,
  GitBranch,
  Monitor,
  Command,
  Coffee,
  Linkedin,
  Twitter,
  Youtube,
  Facebook
} from 'lucide-react';


const ParallaxLayer = ({ children, factor, mouseX, mouseY, initialOffset = { x: 0, y: 0 }, rotate = 0 }: { children: React.ReactNode; factor: number; mouseX: any; mouseY: any; initialOffset?: { x: number; y: number }; rotate?: number }) => {
  const x = useTransform(mouseX, [-0.5, 0.5], [-(factor * 250) + initialOffset.x, (factor * 250) + initialOffset.x]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-(factor * 200) + initialOffset.y, (factor * 200) + initialOffset.y]);

  return (
    <motion.div
      style={{ x, y, rotate }}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      {children}
    </motion.div>
  );
};

const SectionTitle = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-12 space-y-2">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-blue-500 font-mono text-xs tracking-[0.3em] uppercase"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black text-white tracking-tighter"
    >
      {title}
    </motion.h2>
  </div>
);

export const HeroSection = () => {

  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 200 });
  
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 0.15]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const xPct = (e.clientX / innerWidth) - 0.5;
    const yPct = (e.clientY / innerHeight) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Lista ampliada de palabras clave y sus posiciones relativas (más centradas)
  const floatingKeywords = [
    { text: "FULLSTACK", x: -300, y: -250, f: 0.8 },
    { text: "REACT", x: 350, y: -200, f: 1.2 },
    { text: "NODE.JS", x: -400, y: 150, f: 0.6 },
    { text: "GITHUB", x: 450, y: 250, f: 1.5 },
    { text: "MOBILE", x: -200, y: 350, f: 1.1 },
    { text: "AWS", x: 200, y: -350, f: 0.9 },
    { text: "CLOUD", x: -500, y: -100, f: 1.3 },
    { text: "GOLANG", x: 500, y: -50, f: 0.7 },
    { text: "WEB", x: 100, y: 400, f: 1.8 },
    { text: "API", x: -150, y: -450, f: 0.5 },
  ];

  // Iconos centralizados
  const centerIcons = [
    { Icon: Code2, x: -350, y: -50, s: 40, f: 1.4, op: 0.15 },
    { Icon: Cpu, x: 380, y: 120, s: 60, f: 0.9, op: 0.1 },
    { Icon: Terminal, x: -250, y: 200, s: 50, f: 1.6, op: 0.12 },
    { Icon: Database, x: 300, y: -280, s: 35, f: 1.1, op: 0.15 },
    { Icon: Monitor, x: -450, y: -300, s: 45, f: 0.8, op: 0.08 },
    { Icon: Smartphone, x: 420, y: -150, s: 30, f: 2.1, op: 0.18 },
    { Icon: Layers, x: -100, y: -380, s: 40, f: 1.3, op: 0.1 },
    { Icon: Coffee, x: 250, y: 380, s: 35, f: 1.7, op: 0.14 },
    { Icon: Command, x: -480, y: 80, s: 30, f: 1.9, op: 0.1 },
  ];

  return (
    <div ref={containerRef} className="relative text-slate-300 font-sans selection:bg-blue-500/30">
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#0a1425_0%,#010101_100%)]" 
        />
        
        {/* NIVEL 1: FONDO PROFUNDO */}
        <ParallaxLayer factor={0.2} mouseX={smoothX} mouseY={smoothY}>
          <div className="w-[1800px] h-[1800px] bg-blue-600/5 rounded-full blur-[200px]" />
        </ParallaxLayer>

        {/* ETIQUETAS DE TEXTO VISIBLES */}
        {floatingKeywords.map((item, i) => (
          <ParallaxLayer 
            key={`word-${i}`} 
            factor={item.f} 
            mouseX={smoothX} 
            mouseY={smoothY} 
            initialOffset={{ x: item.x, y: item.y }}
          >
            <span className="text-[11px] font-mono font-black text-white/10 tracking-[0.6em] uppercase select-none">
              {item.text}
            </span>
          </ParallaxLayer>
        ))}

        {/* ICONOS DE DESARROLLO VISIBLES */}
        {centerIcons.map((item, i) => (
          <ParallaxLayer 
            key={`icon-${i}`} 
            factor={item.f} 
            mouseX={smoothX} 
            mouseY={smoothY} 
            initialOffset={{ x: item.x, y: item.y }}
          >
            <item.Icon size={item.s} strokeWidth={0.8} style={{ opacity: item.op }} className="text-blue-400" />
          </ParallaxLayer>
        ))}

        {/* LAS ESTRELLAS (Mantenidas como pediste) */}
        {[...Array(40)].map((_, i) => (
          <ParallaxLayer 
            key={`star-${i}`} 
            factor={1.5 + (Math.random() * 2.5)} 
            mouseX={smoothX} 
            mouseY={smoothY} 
            initialOffset={{
              x: (Math.random() - 0.5) * 2000, 
              y: (Math.random() - 0.5) * 1800
            }}
          >
            <div className={`
              ${Math.random() > 0.5 ? 'w-1 h-1 bg-white/40' : 'w-1.5 h-1.5 bg-blue-500/40'} 
              rounded-full blur-[1px]
            `} />
          </ParallaxLayer>
        ))}

      </div>
      

      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-4xl"
          >
            <div className="relative bg-[#080808]/40 backdrop-blur-[80px] border border-white/5 rounded-[3.5rem] p-10 md:p-16 shadow-2xl text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-blue-400">Fullstack Developer • Honduras</span>
              </motion.div>

              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                  JOSÉ<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">GALDAMEZ</span>
                </h1>
                
                <p className="text-slate-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
                  Desarrollador Fullstack con más de 5 años de experiencia, especializado en crear aplicaciones web y móviles escalables orientadas a la nube.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
                  <a href="/#projects" className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                    Mis Proyectos <ChevronRight size={16} />
                  </a>
                  <a href="/contact" className="w-full md:w-auto px-8 py-4 rounded-2xl border border-white/10 text-white font-black text-xs uppercase tracking-widest hover:bg-white/5 transition-all">
                    Contáctame
                  </a>
                </div>

                <div className='flex items-center justify-center gap-4 pt-4'>
                  <a 
                    href="https://github.com/josegaldamez" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/josegaldamezdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://www.facebook.com/josegaldamezdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a 
                    href="https://twitter.com/josegaldamezdev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="https://www.youtube.com/@josegaldamez-dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                  <a 
                    href="mailto:contact@josegaldamez.com" 
                    className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-16 flex flex-col items-center gap-2 text-slate-600"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll para ver más</span>
              <ArrowDown size={14} />
            </motion.div>
          </motion.div>
        </section>
      </div>
  </div>
  )
}
