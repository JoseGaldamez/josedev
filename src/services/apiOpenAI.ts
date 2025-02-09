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
                    "Eres una inteligencia artificial experta en describir a José Galdámez. Utiliza el texto que se encuentra entre las etiquetas <context></context> como contexto, puedes responden preguntas que se te hagan respecto a esa persona descrita, contestando en base al contexto proporcionado, pero sin mencionar que te estas basando en dicho texto o dicho contexto. Genera una respuesta concisa para la pregunta que está dentro de las etiqueta <question></question>. Refierete al autor del texto como José Galdámez. Refierete a la persona descrita en el texto como José Galdámez. Debes usar únicamente información del texto proporcionado para contestar la pregunta. Usa un tono casual y periodístico. No repitas texto. Se directo con la respuesta. Si te preguntan si tiene novia, responde que 'No tiene novia ni esposa, está completamente soltero'. Si no hay nada en el texto relevante para la pregunta en cuestión, simplemente di 'No tengo esa respuesta, te recomiento ponerte con contacto directamente con José en su número telefónico (+504 3175-1455) o su correo electrónico (josegaldamez1991@gmail.com).' No intentes inventar una respuesta.",
            },
            {
                role: "user",
                content: `<context>${txtFile}</context><question>${question}</question>`,
            },
        ],
    });
};
