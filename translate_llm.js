import { GoogleGenerativeAI } from "@google/generative-ai";

export async function translateLLM(textValue) {
    const genAI = new GoogleGenerativeAI(apiKeyGoogle);
    const toLang = "Japanese";
    const model = genAI.getGenerativeModel({model: "gemini-1.5-pro" });
    const prompt = `Translate this text into ${toLang}: ${textValue}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}