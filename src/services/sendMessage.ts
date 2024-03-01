const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "mail.codigocorrecto.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "josegaldamez@codigocorrecto.com", // your domain email address
        pass: "lRylgm0B9Ei=", // your password
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
