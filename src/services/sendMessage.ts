import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "josegaldamez@codigocorrecto.com", // your domain email address
        pass: process.env.EMAIL_PASSWORD, // your password
    },
});

export const sendMessage = async (
    mesageBody: string,
    response: NextApiResponse
) => {
    const messageOptions = {
        from: '"JoseGaldamezDev Website" <josegaldamez@codigocorrecto.com>',
        to: "josegaldamez1991@gmail.com",
        subject: "Message from JoseGaldamezDev Website.",
        text: mesageBody,
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
};
