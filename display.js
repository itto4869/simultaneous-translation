import { translateLLM } from "./translate_llm.js";

window.onload = function () {
    const textArea = document.getElementById("Pre-translation-text");
    const googleTextArea = document.getElementById("google-translate");
    const deeplTextArea = document.getElementById("deepL-translate");
    const LLMTextArea = document.getElementById("chatGPT-translate");

    textArea.addEventListener("keypress", async () => {
        try {
            const googleText = await translateGoogle(textArea.value);
            const deeplText = await translateDeepL(textArea.value);
            const LLMText = await translateLLM(textArea.value);
            console.log("翻訳結果 (Google): " + googleText);
            console.log("翻訳結果 (DeepL): " + deeplText);
            console.log("翻訳結果 (LLM): " + LLMText);
            googleTextArea.value = googleText;
            deeplTextArea.value = deeplText;
            LLMTextArea.value = LLMText;
        } catch (error) {
            console.error("Error:", error);
    }
    });
};