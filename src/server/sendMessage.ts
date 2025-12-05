"use server";

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
    messageBody: string,
) => {
    try {
        const messageOptions = {
            from: `"JoseGaldamezDev" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Message from JoseGaldamezDev Website.",
            html: messageBody,
        };
        await transporter.sendMail(messageOptions);
        return { success: true };
    } catch (error) {
        return { success: false };
    }
};

export const sendMessageConfirm = async (
    htmlBody: string,
    mailTo: string
) => {
    try {
        
        const messageOptions = {
            from: `"JoseGaldamezDev" <${process.env.EMAIL_USER}>`,
            to: mailTo,
            subject: "Confirmación de mensaje recibido de JoseGaldamezDev Website",
            html: htmlBody,
        };
        await transporter.sendMail(messageOptions);
        return { success: true };
    } catch (error) {
        return { success: false };
    }
};
    