

const time = document.querySelector(".time");
const date = document.querySelector(".date");

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString('en-GB');
    time.innerText = currentTime;
    setTimeout(showTime, 1000);
}
showTime();

function showDate() {
    const day = new Date();
    const options = {weekday:'long', month: 'long', day: 'numeric'};
    const currentDate = day.toLocaleDateString('en-US', options);
    date.innerText = currentDate;
    setTimeout(showDate, 60000);
}
showDate();