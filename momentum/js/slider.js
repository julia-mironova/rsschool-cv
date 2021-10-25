
const greeting = document.querySelector(".greeting");
const bodyImg = document.getElementById("bodyImg");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");

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

let num = String(getRandomNum());
let bgNum = num.padStart(2, "0");




//функция должна работать и правильно писать строку
function setBg() {
    let partOfDay = getPartOfDay();
    let way = `url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/${partOfDay}/${bgNum}.jpg')` 
   //url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/afternoon/12.jpg'
   bodyImg.style.background = way;
   bodyImg.style.backgroundSize = "cover"; 
   bodyImg.style.backgroundRrepeat = "no-repeat";
   setTimeout(setBg, 3600000);
}
setBg();


slideNext.addEventListener('click', getSlideNext);
function getSlideNext() {
    let partOfDay = getPartOfDay();
    let bgNumNext = +bgNum+1;
    let bgNumNextSlide;
    if (bgNumNext<=20) {
        bgNumNext = String(+bgNum+1);
        bgNumNextSlide = bgNumNext.padStart(2, "0");
        bgNum++;
    } else {
        bgNum = 0;
        bgNumNext = String(+bgNum+1);
        bgNumNextSlide = bgNumNext.padStart(2, "0");
        bgNum++;
    }
    let way = `url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/${partOfDay}/${bgNumNextSlide}.jpg')` 
    bodyImg.style.background = way;
    bodyImg.style.backgroundSize = "100% 100%"; 
     
}
//назад листаем
slidePrev.addEventListener('click', getSlidePrev);
function getSlidePrev() {
    let partOfDay = getPartOfDay();
    let bgNumPrev = +bgNum-1;
    let bgNumPrevSlide;
    if (bgNumPrev>=1) {
        bgNumPrev = String(+bgNum-1);
        bgNumPrevSlide = bgNumPrev.padStart(2, "0");
        bgNum--;
    } else {
        bgNum = 21;
        bgNumPrev = String(+bgNum-1);
        bgNumPrevSlide = bgNumPrev.padStart(2, "0");
        bgNum--;
    }
    let way = `url('https://raw.githubusercontent.com/julia-mironova/stage1-tasks/assets/images/${partOfDay}/${bgNumPrevSlide}.jpg')` 
    bodyImg.style.background = way;
    bodyImg.style.backgroundSize = "100% 100%"; 
     
}