import { NextApiResponse } from "next";
import { responseSSE } from "@/utils/sse";
import { askQuestionToAI } from "@/services/apiOpenAI";

export const runtime = "edge";

export default async function handler(
    request: Request,
    response: NextApiResponse
) {
    if (request.method !== "GET") {
        return response
            .status(404)
            .json({ error: "Invalid Method", ok: false, result: null });
    }

    try {
        const params = new URL(request.url);
        const question = params.searchParams.get("question");

        if (!question) {
            return response.status(404).json({
                error: "Invalid Request, question is missing",
                ok: false,
                result: null,
            });
        }

        return responseSSE({ request }, async (sendEvent) => {
            const response = await askQuestionToAI(question);

            for await (const part of response) {
                if (part.choices[0].delta.content) {
                    sendEvent(part.choices[0].delta.content);
                }
            }

            sendEvent("__END__");
        });
    } catch (error) {
        response
            .status(500)
            .json({ error: "Server Error", ok: false, result: null });
    }
}
