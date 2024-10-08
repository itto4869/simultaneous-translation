function translateText() {
    let textElement = document.getElementById('Pre-translation');
    let text = textElement.value;
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
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            console.log(res.data.translations[0].translatedText);
        } else if (xhr.readyState === 4) {
            console.error("Error: " + xhr.status + " - " + xhr.responseText);
        }
    };

    xhr.send(JSON.stringify(requestData));
}
