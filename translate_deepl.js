async function translateDeepL(textValue) {
    let text = textValue;
    let fromLang = "JA";
    let toLang = "EN";

    const URL = "https://api-free.deepl.com/v2/translate";

    let requestData = new URLSearchParams();
    requestData.append("auth_key", apiKeyDeepL);
    requestData.append("text", text);
    requestData.append("source_lang", fromLang);
    requestData.append("target_lang", toLang);

    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: requestData
        });

        if (!response.ok) {
            throw new Error("Error: " + response.status + " - " + response.statusText);
        }

        const data = await response.json();
        return data.translations[0].text;
    } catch (error) {
        console.error(error);
        throw error;
    }
}