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

/*

API of Twillio

const accountSid = 'AC00ff2ecdb1b1da48a9753e41e2c59666';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Este es un ejemplo de mensaje desde un endpoint.',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+50431751455'
    })
    .then(message => console.log(message.sid))
    .done();


    const accountSid = 'AC00ff2ecdb1b1da48a9753e41e2c59666';
const authToken = '[AuthToken]';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hola Jose.',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+50431751455'
    })
    .then(message => console.log(message.sid))
    .done();

*/
