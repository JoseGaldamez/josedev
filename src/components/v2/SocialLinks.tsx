'use client'
import React from 'react'
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SocialLinks = () => {
    return (
        <div className="fixed flex items-center justify-center flex-col left-4 h-screen top-1/2 transform -translate-y-1/2 space-y-4">
            <motion.a
                href="https://github.com/JoseGaldamez"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-gray-400 hover:text-white transition-colors"
            >
                <FaGithub />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/josegaldamezdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-gray-400 hover:text-white transition-colors"
            >
                <FaLinkedin />
            </motion.a>
            <motion.a
                href="https://x.com/josegaldamezdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-gray-400 hover:text-white transition-colors"
            >
                <FaTwitter />
            </motion.a>
        </div>
    )
}
