"use server";

import { askQuestionToAI } from "@/services/apiOpenAI";

export const askToAI = async (question: string) => {
    return await askQuestionToAI(question);
};
