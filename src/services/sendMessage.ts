const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // your domain email address
        pass: process.env.EMAIL_PASSWORD, // your password
    },
});

export const sendMessage = async (mesageBody: string) => {
    const messageOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: process.env.EMAIL_SUBJECT,
        text: mesageBody,
    };

    try {
        transporter.sendMail(messageOptions, function (error: any, info: any) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        });
    } catch (error) {
        console.error({ error });
    }
};
