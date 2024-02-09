const client = require("twilio")(
    process.env.TWILLIO_accountSid,
    process.env.TWILLIO_authToken
);

export const sendMessage = async (mesageBody: string) => {
    try {
        await client.messages.create({
            body: mesageBody,
            from: "whatsapp:+14155238886",
            to: "whatsapp:+50431751455",
        });
    } catch (error) {
        console.error({ error });
    }
};
