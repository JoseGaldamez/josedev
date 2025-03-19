"use client"

import { use, useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaRobot, FaTimes } from "react-icons/fa"
import { Message } from "@/models/message.model"
import { MessagesList } from "./MessagesList"
import { askToAI } from "@/server/openai.actions"

interface Props {
    show?: boolean
    setShow: (show: boolean) => void
}

export const Fab = ({ show = false, setShow = (value) => { } }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    const inputMessage = useRef<HTMLTextAreaElement>(null)
    const listRef = useRef<HTMLDivElement>(null)


    useEffect(() => {

        if (show) {
            setIsOpen(true)
            setShow(false)
            setLoading(true)
            setMessage('')
            setLoading(false)
        }

    }, [show]);

    useEffect(() => {
        if (!loading) {
            inputMessage.current?.focus();
        }
        if (isOpen) {
            listRef.current?.scrollTo({ top: listRef.current?.scrollHeight, behavior: 'smooth' })
        }

    }, [loading, isOpen]);

    const sendMessage = async () => {
        if (message.trim() === "") return
        const newMessageUser = {
            id: new Date().getTime().toString(),
            user: "assistant",
            message: message,
        }
        setMessages([...messages, newMessageUser])
        setMessage("")
        setLoading(true)

        const answer = await askToAI(message);

        const response = {
            id: new Date().getTime().toString(),
            user: "user",
            message: removeHTMLWrapper(answer || ""),
        }

        setMessages([...messages, newMessageUser, response])
        setLoading(false)
    }

    const removeHTMLWrapper = (text: string) => {
        return text.replace("```html", "").replace("```", "");
    }

    return (
        <div className="z-50 fixed bottom-4 right-4">
            <motion.button
                className="fixed bottom-4 right-4 bg-[#101604] rounded-full p-2 shadow-lg"
                onClick={() => setIsOpen(!isOpen)}
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
                        className="fixed bottom-20 right-4 max-w-sm md:max-w-lg w-5/6 md:w-full bg-[#1c1f17] rounded-lg shadow-lg p-4"
                    >
                        <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>
                            <FaTimes className="text-2xl" />
                        </button>
                        <h3 className="text-xl font-medium text-gray-300 mb-2">AI de José Galdámez</h3>
                        <p className="text-sm text-gray-500 mb-4">Puedo contestar lo que necesites saber sobre José, como su experiencia laboral, sus habilidades, etc. ¿Cómo puedo ayudarte?</p>

                        <div ref={listRef} className="w-full max-h-72 md:max-h-[700px] overflow-auto py-5 bg-gray-300 bg-opacity-10 my-5 rounded-2xl">
                            {
                                messages.length === 0 && (
                                    <p className="text-center w-full text-gray-100 opacity-20">Sin mensajes aún</p>
                                )
                            }
                            {
                                messages.length > 0 && (
                                    <MessagesList messages={messages} loading={loading} />
                                )
                            }

                        </div>
                        <textarea
                            ref={inputMessage}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !loading) {
                                    sendMessage();
                                }
                            }}
                            disabled={loading}
                            placeholder="Escribe aquí tu consulta..."
                            className="textarea_chatbot"></textarea>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
