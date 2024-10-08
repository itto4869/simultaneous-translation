function translateText() {
    let textElement = document.getElementById('Pre-translation');
    let text = textElement.value;
    let fromLang = "ja";
    let toLang = "en";

    const URL = "https://api-free.deepl.com/v2/translate";
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", URL, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    let requestData = `auth_key=${apiKeyDeepL}&text=${encodeURIComponent(text)}&source_lang=${fromLang.toUpperCase()}&target_lang=${toLang.toUpperCase()}`;
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let res = JSON.parse(xhr.responseText);
            console.log(res.translations[0].text);
        } else if (xhr.readyState === 4) {
            console.error("Error: " + xhr.status);
        }
    };

    xhr.send(requestData);
}