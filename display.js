import { translateLLM } from "./translate_llm.js";

window.onload = function () {
    getResource();
    const textArea = document.getElementById("Pre-translation-text");
    const selectFromLang = document.getElementById("pre-translation-lang");
    const selectToLang = document.getElementById("post-translation-lang");
    const button = document.getElementById("translate-button");
    const googleTextArea = document.getElementById("google-translate");
    const deeplTextArea = document.getElementById("deepL-translate");
    const LLMTextArea = document.getElementById("chatGPT-translate");

    button.addEventListener("click", async () => {
        try {
            const googleText = await translateGoogle(textArea.value, selectFromLang.value, selectToLang.value);
            const deeplText = await translateDeepL(textArea.value, deeplMap[selectFromLang.value], deeplMap[selectToLang.value]);
            const LLMText = await translateLLM(textArea.value, geminiMap[selectToLang.value]);
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