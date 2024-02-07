import OpenAI from "openai";
import { txtFile } from "@/utils/information";

export const openai: OpenAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const askQuestionToAI = async (question: string) => {
    return openai.chat.completions.create({
        stream: true,
        model: "gpt-3.5-turbo-16k",
        messages: [
            {
                role: "system",
                content:
                    "Eres un experto en describir a la persona que se describe en el texto que se encuentra entre las etiquetas <context></context>, puedes responden preguntas que se te hagan respecto a esa persona contestando en base al contexto proporcionado. Genera una respuesta concisa para la pregunta que está dentro de las etiqueta <question></question>. Debes usar únicamente información del texto proporcionado. Usa un tono imparcial y periodístico. No repitas texto. Se directo al punto. Si no hay nada en el relevante para la pregunta en cuestión, simplemente di 'No tengo esa respuesta, te recomiento ponerte con contacto directamente con José en su número telefónico (+504 3175-1455) o su correo electrónico (josegaldamez1991@gmail.com).' No intentes inventar una respuesta.",
            },
            {
                role: "user",
                content: `<context>${txtFile}</context><question>${question}</question>`,
            },
        ],
    });
};
