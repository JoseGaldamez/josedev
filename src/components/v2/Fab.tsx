"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRobot, FaTimes } from "react-icons/fa"

export const Fab = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.button
                className="fixed bottom-4 right-4 bg-[#101604] rounded-full p-2 shadow-lg"
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaRobot className="text-4xl" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-20 right-4 max-w-lg w-full bg-[#1c1f17] rounded-lg shadow-lg p-4"
                    >
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                        <h3 className="text-xl font-medium text-gray-300 mb-2">AI de José Galdámez</h3>
                        <p className="text-sm text-gray-500 mb-4">Puedo contestar lo que necesites saber sobre José, como su experiencia laboral, sus habilidades, etc. ¿Cómo puedo ayudarte?</p>

                        <div className="w-full h-96 bg-gray-300 bg-opacity-10 mb-5 rounded-2xl flex items-center justify-between">
                            <p className="text-center w-full text-gray-100 opacity-20">Sin mensajes aún</p>
                        </div>
                        <textarea placeholder="Escribe tu consulta..." className="w-full px-3 py-2 bg-[#272b21] text-gray-100 rounded-md field-sizing textarea_chatbot" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
