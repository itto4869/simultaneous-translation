window.onload = function () {
    let textArea = document.getElementById('Pre-translation-text');
    let googleTextArea = document.getElementById('google-translate');
    textArea.addEventListener('keypress', () => {
        let text_value = textArea.value;
        let googleTranslatedText = "iidx";
        //googleTranslatedText = translateText(text_value);
        console.log(googleTranslatedText);
        googleTextArea.textContent = googleTranslatedText;
        });
  };
function translateText(text_value) {
    console.log(text_value);
    let text = text_value;
    let fromLang = "ja";
    let toLang = "en";

    const URL = "https://translation.googleapis.com/language/translate/v2?key=" + apiKey;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader("Content-Type", "application/json");


    let requestData = {
        q: text,
        source: fromLang,
        target: toLang,
        format: "text"
    };

    console.log("翻訳前:" + text);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            console.log("翻訳後:" + res.data.translations[0].translatedText);
        } else if (xhr.readyState === 4) {
            console.error("Error: " + xhr.status + " - " + xhr.responseText);
        }
    };

    xhr.send(JSON.stringify(requestData));
}
