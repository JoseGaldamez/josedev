import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import React from 'react'

export const SocialNetworks = () => {
  return (
    <div className='w-full animate-in fade-in-0 duration-1000'>
        <h2>Redes Sociales</h2>
        <hr className='border-t border-gray-700 opacity-30 my-5'/>
        <ul className='flex items-center gap-8 justify-center flex-wrap'>
            <li className='text-center flex flex-col items-center'>
                <a className='text-center flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity' href="https://www.youtube.com/@josegaldamez-dev" target="_blank" rel="noopener noreferrer">
                <Youtube /> YouTube
                </a>
            </li>
            <li className='text-center flex flex-col items-center'>
                <a className='text-center flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity' href="https://www.linkedin.com/in/josegaldamezdev" target="_blank" rel="noopener noreferrer">
                <Linkedin /> LinkedIn
                </a>
            </li>
            <li className='text-center flex flex-col items-center'>
                <a className='text-center flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity' href="https://github.com/JoseGaldamez" target="_blank" rel="noopener noreferrer">
                <Github /> GitHub
                </a>
            </li>
            <li className='text-center flex flex-col items-center'>
                <a className='text-center flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity' href="https://www.instagram.com/josegaldamezdev" target="_blank" rel="noopener noreferrer">
                <Instagram /> Instagram
                </a>
            </li>
            <li className='text-center flex flex-col items-center'>
                <a className='text-center flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity' href="https://www.facebook.com/josegaldamezdev" target="_blank" rel="noopener noreferrer">
                <Facebook /> Facebook
                </a>
            </li>
        </ul>
    </div>
  )
}
