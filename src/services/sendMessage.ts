const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER, // your domain email address
        pass: process.env.EMAIL_PASSWORD, // your password
    },
});

export const sendMessage = async (mesageBody: string) => {
    const messageOptions = {
        from: '"JoseGaldamezDev Website" <josegaldamez@codigocorrecto.com>',
        to: "josegaldamez1991@gmail.com",
        subject: "Message from JoseGaldamezDev Website.",
        text: mesageBody,
    };

    transporter.sendMail(messageOptions, function (error: any, info: any) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};
