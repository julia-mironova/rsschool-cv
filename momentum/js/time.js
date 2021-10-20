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
    let partOfDay = Math.ceil(showGreeting()/6, 1);
    switch (partOfDay) {
        case 2:
            greeting.innerText = "Good morning";
            break;
        case 3:
            greeting.innerText = "Good afternoon";
            break;
        case 4:
            greeting.innerText = "Good evening";
            break;
        case 1:
        case 0:            
            greeting.innerText = "Good night";
            break;
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
