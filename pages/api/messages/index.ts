import { sendMessage } from "@/services/sendMessage";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    if (request.method !== "POST") {
        return response
            .status(400)
            .json({ error: true, description: "Invalid Method" });
    }

    const bodyMessage = JSON.parse(request.body);
    if (!bodyMessage || !bodyMessage.message) {
        return response.status(400).json({
            error: true,
            description: "Bad Request, some props are missing.",
        });
    }

    try {
        await sendMessage(bodyMessage.message);
        return response
            .status(201)
            .json({ error: false, description: "Message sent." });
    } catch (error) {
        return response.status(500).json({ error: true, description: error });
    }
}
