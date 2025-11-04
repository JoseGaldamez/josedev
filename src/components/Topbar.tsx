import { AxeIcon, MailIcon, User2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Topbar = () => {
  return (
    <div className='backdrop-blur-sm text-white p-4 w-full flex justify-between items-center fixed top-0 z-50'>
      <Link href="/">
        <h1 className='text-2xl font-light opacity-50 hover:opacity-100 transition-opacity duration-300'>JG</h1>
      </Link>
      <menu>
        <ul className='flex gap-4'>
          <li>
            <a href="#projects" className='text-white/40 hover:text-white/80 transition-colors duration-300 font-extralight'>
            <AxeIcon size={22} className="inline mb-1 mr-1 font-extralight" />
            </a>
          </li>
          <li>
            <a href="#about" className='text-white/40 hover:text-white/80 transition-colors duration-300 font-extralight'>
              <User2Icon size={22} className="inline mb-1 mr-1 font-extralight" />
            </a>
          </li>
          <li>
            <a href="#contact" className='text-white/40 hover:text-white/80 transition-colors duration-300 font-extralight'>
            <MailIcon size={22} className="inline mb-1 mr-1 font-extralight" />
            </a>
          </li>
        </ul>
      </menu>
    </div>
  )
}
