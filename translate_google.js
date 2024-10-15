async function translateGoogle(textValue) {
    console.log(textValue);
    let text = textValue;
    let fromLang = "ja";
    let toLang = "en";

    const URL = "https://translation.googleapis.com/language/translate/v2?key=" + apiKeyGoogle;

    let requestData = {
        q: text,
        source: fromLang,
        target: toLang,
        format: "text"
    };

    console.log("翻訳前:" + text);

    // fetch APIを使ってPOSTリクエストを送信
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestData)
        });
        
        if (!response.ok) {
            throw new Error("Error: " + response.status + "-" + response.statusText);
        }

        const data = await response.json();
        return data.data.translations[0].translatedText;
    } catch (error) {
        console.error("Error:", error);
        return "Error: " + error;
    }
}