'use client';
import React from 'react'

export const BackgroundLetters = () => {
  const technologies = [
    { text: 'JavaScript', left: '10%', top: '15%', size: '2rem', rotation: '12deg' },
    { text: 'TypeScript', left: '75%', top: '20%', size: '1.5rem', rotation: '-8deg' },
    { text: 'React', left: '5%', top: '45%', size: '2.5rem', rotation: '5deg' },
    { text: 'Next.js', left: '85%', top: '60%', size: '1.8rem', rotation: '-12deg' },
    { text: 'Node.js', left: '20%', top: '75%', size: '2rem', rotation: '15deg' },
    { text: 'Java', left: '70%', top: '10%', size: '1.7rem', rotation: '-5deg' },
    { text: 'Python', left: '15%', top: '85%', size: '1.6rem', rotation: '8deg' },
    { text: 'Flutter', left: '60%', top: '85%', size: '2.2rem', rotation: '-10deg' },
    { text: 'Android', left: '90%', top: '35%', size: '1.4rem', rotation: '7deg' },
    { text: 'MongoDB', left: '25%', top: '25%', size: '1.5rem', rotation: '-15deg' },
    { text: 'PostgreSQL', left: '45%', top: '10%', size: '1.3rem', rotation: '10deg' },
    { text: 'AWS', left: '80%', top: '75%', size: '1.9rem', rotation: '-6deg' },
    { text: 'Docker', left: '35%', top: '65%', size: '1.7rem', rotation: '12deg' },
    { text: 'GraphQL', left: '55%', top: '40%', size: '1.4rem', rotation: '-8deg' },
    { text: 'HTML', left: '8%', top: '65%', size: '1.6rem', rotation: '14deg' },
    { text: 'CSS', left: '92%', top: '50%', size: '1.8rem', rotation: '-11deg' },
    { text: 'Tailwind', left: '40%', top: '85%', size: '1.5rem', rotation: '6deg' },
    { text: 'Vue.js', left: '65%', top: '25%', size: '1.7rem', rotation: '-13deg' },
    { text: 'Express', left: '30%', top: '45%', size: '1.4rem', rotation: '9deg' },
    { text: 'Firebase', left: '78%', top: '45%', size: '1.6rem', rotation: '-7deg' },
  ];

  return (
    <div className='absolute z-0 opacity-40 inset-0 min-h-screen overflow-hidden pointer-events-none'>
      <div className='relative w-full h-full z-0'>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className='absolute text-gray-900 font-bold select-none opacity-10 hover:opacity-20 transition-opacity duration-300'
            style={{
              left: tech.left,
              top: tech.top,
              fontSize: tech.size,
              transform: `rotate(${tech.rotation})`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            {tech.text}
          </div>
        ))}
      </div>
      
      {/* Animación flotante */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .absolute:nth-child(odd) {
          animation: float 6s ease-in-out infinite;
        }
        
        .absolute:nth-child(even) {
          animation: float 8s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  )
}
