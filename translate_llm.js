import { GoogleGenerativeAI } from "@google/generative-ai";

const systemInstruction = "Translate the given text into the specified language. However, please output only the translated text."

export async function translateLLM(textValue) {
    const genAI = new GoogleGenerativeAI(apiKeyGoogle);
    const toLang = "Japanese";
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro",
        systemInstruction: systemInstruction,
    });
    const prompt = `Translate this text into ${toLang}: ${textValue}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
}