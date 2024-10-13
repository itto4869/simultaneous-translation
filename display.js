window.onload = function () {
    const textArea = document.getElementById("Pre-translation-text");
    const googleTextArea = document.getElementById("google-translate");
    const deeplTextArea = document.getElementById("deepL-translate");

    textArea.addEventListener("keypress", async () => {
        try {
            const googleText = await translateGoogle(textArea.value);
            const deeplText = await translateDeepL(textArea.value);
            console.log("翻訳結果 (Google): " + googleText);
            console.log("翻訳結果 (DeepL): " + deeplText);
            googleTextArea.value = googleText;
            deeplTextArea.value = deeplText;
        } catch (error) {
            console.error("Error:", error);
    }
    });
};