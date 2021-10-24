const toEn = document.querySelector(".toEn");
const toRu = document.querySelector(".toRu");
const lang = document.querySelectorAll(".lang");
const html = document.querySelector('html');


var sets= {
    "en":{
        "afternoon":"Good afternoon",
        "name": "[Enter name]"

    },
    "ru":{
        "afternoon":"Добрый день",
        "name":"[Введите имя]"
    }
}


function setRu() {
 html.lang = 'ru';
}

function setEn() {
    html.lang = 'en';
   }

toEn.addEventListener("click", setEn);
toRu.addEventListener("click", setRu);
