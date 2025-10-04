import { NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendMessage = async (
    mesageBody: string,
    mailTo: string
) => {
    try {
        
        const messageOptions = {
            from: `"JoseGaldamezDev" <${process.env.EMAIL_USER}>`,
            to: mailTo,
            subject: "Message from JoseGaldamezDev Website.",
            text: mesageBody,
        };
        await transporter.sendMail(
            messageOptions,
            function (error: any, info: any) {
                if (error) {
                    return { success: false, error };
                } else {
                    console.log("Email sent: " + info.response);
                    return { success: true, info };
                }
            }
        );
    } catch (error) {
        return { success: false, error };
    }
    };
    