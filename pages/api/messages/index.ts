import nodemailer from "nodemailer";
import { sendMessage } from "@/services/sendMessage";
import { NextApiRequest, NextApiResponse } from "next";

const transporter = nodemailer.createTransport({
    host: "mail.codigocorrecto.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "josegaldamez@codigocorrecto.com", // your domain email address
        pass: "lRylgm0B9Ei=", // your password
    },
});

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
        const messageOptions = {
            from: '"JoseGaldamezDev Website" <josegaldamez@codigocorrecto.com>',
            to: "josegaldamez1991@gmail.com",
            subject: "Message from JoseGaldamezDev Website.",
            text: bodyMessage.message,
        };

        await transporter.sendMail(
            messageOptions,
            function (error: any, info: any) {
                if (error) {
                    return response.status(500).json({
                        error: true,
                        description: "Error sending email.",
                        result: error,
                    });
                } else {
                    console.log("Email sent: " + info.response);
                    return response.status(201).json({
                        error: false,
                        description: "Message sent.",
                        result: info.response,
                    });
                }
            }
        );

        // const result = await sendMessage(bodyMessage.message);
        // return response.status(201).json({
        //     error: false,
        //     description: "Message sent.",
        //     result,
        // });
    } catch (error) {
        return response.status(500).json({ error: true, description: error });
    }
}
