"use server";

import { askQuestionToAI } from "@/services/apiOpenAI";
import { cookies } from "next/headers";

export const askToAI = async (question: string) => {
    const result = await askQuestionToAI(question);
    const response = result.choices[0].message.content;

    return response;
};
