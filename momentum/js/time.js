const time = document.querySelector(".time");
const date = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const name = document.getElementById('userName');

//определяет большое время
function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-GB');
    time.innerText = currentTime;
    setTimeout(showTime, 1000);
}
showTime();
 
//определяет дату и день недели
function showDate() {
    const day = new Date();
    const options = {weekday:'long', month: 'long', day: 'numeric'};
    const currentDate = day.toLocaleDateString('en-US', options);
    date.innerText = currentDate;
    setTimeout(showDate, 60000);
}
showDate();

//определяем тип приветствия (день-утро-ночь)
 
function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    return hours;
}

function getTimeOfDay() {
    let partOfDay = showGreeting()/6;
    if (partOfDay < 3 && partOfDay >= 2) {
        greeting.innerText = "Good afternoon";
    } else if (partOfDay < 4 && partOfDay >= 3) {
        greeting.innerText = "Good evening";
    } else if  (partOfDay < 1 && partOfDay >= 0) {
        greeting.innerText = "Good night";
    } else if  (partOfDay < 2 && partOfDay >= 1) {
        greeting.innerText = "Good morning";
    }
       setTimeout(getTimeOfDay, 3600000);
}
 

getTimeOfDay();

//определяем имя в хранилище
function setLocalStorage() {
    localStorage.setItem('name', name.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);

