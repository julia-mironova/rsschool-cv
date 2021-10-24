const toEn = document.querySelector(".toEn");
const toRu = document.querySelector(".toRu");
const lang = document.querySelectorAll(".lang");
const html = document.querySelector('html');
const name = document.getElementById('userName');


var translates= {
    "en":{
        "afternoon":"Good afternoon",
        "evening":"Good evening",
        "night":"Good night",
        "morning":"Good morning",
        "name": "[Enter name]"
    },
    "ru":{
        "afternoon":"Добрый день",
        "evening":"Добрый вечер",
        "night":"Доброй ночи",
        "morning":"Доброе утро",
        "name":"[Введите имя]"
    }
}


function setRu() {
 html.lang = 'ru';
 translateTo()
}

function setEn() {
    html.lang = 'en';
    translateTo()
   }

function translateTo() {
   
       for (let i=0; i< lang.length; i++) {
            let el = lang[i];
            
            let translationForEl = translates[html.lang][el.getAttribute("key")];
            if (el.hasAttribute("placeholder")) {
                el.setAttribute("placeholder", translationForEl);
            } else {
                el.innerText = translationForEl; 
            }
            
        }

    
}   

toEn.addEventListener("click", setEn);
toRu.addEventListener("click", setRu);