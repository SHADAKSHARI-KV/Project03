var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("txt-iput");
var outputDiv = document.querySelector("#output");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


function getTranslationURL(text) {
    return serverURL + "?"+"text=" + text
}

    

function clickHandler() {

    var inputtext = txtInput.value;
    fetch(getTranslationURL(text))
   .then(response => response.json())
   .then(json => console.log(json))
};

btnTranslate.addEventListener("click", clicktHandler)
