const toEn = document.querySelector(".toEn");
const toRu = document.querySelector(".toRu");
const lang = document.querySelectorAll(".lang");
const html = document.querySelector('html');
const name = document.getElementById('userName');
const submit = document.querySelector('.submit');
const onChange = document.getElementById("selector");
const greetingContainer = document.querySelector(".greeting-container");
const time = document.querySelector(".time");
const weather = document.querySelector(".weather");
const player = document.querySelector(".player");
const toDo = document.querySelector(".to_do_list");
const quoteAll =document.querySelector(".quoteAll");
const btnQuote = document.querySelector(".change-quote");

var translates= {
    "en":{
        "afternoon":"Good afternoon",
        "evening":"Good evening",
        "night":"Good night",
        "morning":"Good morning",
        "name": "[Enter name]",
        "cityT" : "Is your city Minsk?",
        "error": "Error! city not found for"

    },
    "ru":{
        "afternoon":"Добрый день",
        "evening":"Добрый вечер",
        "night":"Доброй ночи",
        "morning":"Доброе утро",
        "name":"[Введите имя]",
        "cityT":"Твой город Минск?",
        "error": "Ошибка! Город не найден для"
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


function changeListener(){
      if (onChange.value == "en") {
        html.lang = 'en';
        translateTo()
    } else if (onChange.value == "ru"){
        html.lang = 'ru';
        translateTo()
    } else if (onChange.value == "greeting") {
        greetingContainer.style.opacity = "0";
    } else if (onChange.value == "time") {
        time.style.opacity = "0";
    } else if (onChange.value == "weather") {
        weather.style.opacity = "0";
    } else if (onChange.value == "player") {
        player.style.opacity = "0";
    } else if (onChange.value == "todolist") {
       toDo.style.opacity = "0";
    } else if (onChange.value == "quote") {
        quoteAll.style.opacity = "0";
        btnQuote.style.opacity = "0";
     }

}

onChange.addEventListener("change", changeListener);
