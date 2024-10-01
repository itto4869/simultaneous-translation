let text = document.getElementById('Pre-translation');
let fromLang = "ja"
let toLang = "en"

const URL = "https://translation.googleapis.com/language/translate/v2?key=" + apikey + 
            "&q=" + encodeURI(text) + "&source=" + fromLang + "&target=" + toLang;

let xhr = new XMLHttpRequest();
xhr.open("POST", [URL], false);
xhr.send();
if (xhr.status == 200) {
    let res = JSON.parse(xhr.responseText);
    console.log(res.data.translations[0].translatedText);
}
