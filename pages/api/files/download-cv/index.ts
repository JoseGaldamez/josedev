import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import * as path from "path";

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    if (request.method !== "GET") {
        return response.status(405).end();
    }

    response.setHeader(
        "Content-Disposition",
        "attachment; filename=JoseGaldamez_CV.pdf"
    );
    response.setHeader("Content-Type", "application/pdf");

    const filePath = path.join(
        process.cwd(),
        "src/assets",
        "JoseGaldamez_CV.pdf"
    );
    const fileStream = fs.createReadStream(filePath);

    fileStream.pipe(response);

    response.on("finish", () => {
        fileStream.close();
    });
}
