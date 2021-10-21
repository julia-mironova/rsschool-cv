
const greeting = document.querySelector(".greeting");
const bodyImg = document.getElementById('bodyImg');

function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    return hours;
}

function getPartOfDay() {
    let partOfDay = showGreeting()/6;
    let unswer = "";
    if (partOfDay < 3 && partOfDay >= 2) {
        unswer = "afternoon";
    } else if (partOfDay < 4 && partOfDay >= 3) {
        unswer = "evening";
    } else if  (partOfDay < 1 && partOfDay >= 0) {
        unswer = "night";
    } else if  (partOfDay < 2 && partOfDay >= 1) {
        unswer = "morning";
    }
    
    return unswer;
}


function getRandomNum() {
    let num = Math.floor(Math.random() * 20);
        if (num === 0) {
        return 1;
    }
    return num;
}
//функция должна работать и правильно писать строку
function setBg() {
    let partOfDay = getPartOfDay();
    let num = String(getRandomNum());
    let bgNum = num.padStart(2, "0");
    let way = `url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/${partOfDay}/${bgNum}.jpg')` 
   //url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/afternoon/12.jpg'
   bodyImg.style.background = way;
   bodyImg.style.backgroundSize = "100% 100%"; 
   setTimeout(setBg, 3600000);
}
setBg();

//bodyImg.style.background = "url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/afternoon/13.jpg";
//bodyImg.style.backgroundSize = "100% 100%"; //потом удалить как функция заработает