'use client'
import React from 'react'
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const SocialLinksHorizontal = () => {
    return (
        <div className="flex items-center justify-around">
            <motion.a
                href="https://github.com/JoseGaldamez"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-[#37baba] hover:text-white transition-colors"
            >
                <FaGithub />
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/josegaldamezdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-[#37baba] hover:text-white transition-colors"
            >
                <FaLinkedin />
            </motion.a>
            <motion.a
                href="https://x.com/josegaldamezdev"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="block text-2xl text-[#37baba] hover:text-white transition-colors"
            >
                <FaTwitter />
            </motion.a>
        </div>
    )
}
