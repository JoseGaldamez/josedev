import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export const SocialNetwork = () => {
  return (
    <div>
        <h4 className="text-lg font-semibold mt-10">Redes sociales</h4>
                        <ul className="flex items-center space-x-4 mt-2">
                            <li>
                                <Link href="https://x.com/josegaldamezdev" target="_blank" className="text-blue-500 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaTwitter size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.linkedin.com/in/josegaldamezdev" target="_blank" className="text-blue-600 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaLinkedin size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/JoseGaldamez" target="_blank" className="text-gray-900 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaGithub size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@josegaldamez-dev" target="_blank" className="text-red-500 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaYoutube size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://facebook.com/josegaldamezdev" target="_blank" className="text-blue-600 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaFacebook size={30} />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/+50431751455" target="_blank" className="text-green-600 hover:underline opacity-80 hover:opacity-100 transition-opacity duration-500">
                                    <FaWhatsapp size={30} />
                                </Link>
                            </li>
                        </ul>
    </div>
  )
}
