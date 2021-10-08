window.onload = function () {
   addTagsClickHandler();
}

const addTagsClickHandler = () => {
     document.querySelector(".slider_dots").addEventListener("click", (e) => {
       if (e.target.classList.contains("slider_item")) {
           let clikedDote = e.target;
            removeSelectedDote();
            selectClicedDote(clikedDote);

       }
     })
}

const removeSelectedDote = () => {
    let dots = document.querySelectorAll(".slider_dots .slider_item");
    dots.forEach(item => {
        item.classList.remove("item-gold");
        item.classList.add("item");
    })
}

const selectClicedDote = (clikedDote) => {
    clikedDote.classList.add("item-gold");
    clikedDote.classList.remove("item");
}


let start = 0; //1-й модуль
num = 1;
const sliderTourn = document.querySelector('.welcome_picktures_photos');

document.querySelector('.arrow_right').addEventListener('click', function (){
    console.log("right");
    start = start + 1000;
    console.log(`start=${start}`);
    if (start > 4000) {
        start = 0;
    }
    sliderTourn.style.transform = `translateX(${-start}px)`;
})

document.querySelector('.arrow_left').addEventListener('click', function (){
    console.log("left");
    start = start - 1000;
    if (start < 0) {
        start = 4000;
    }
    sliderTourn.style.transform = `${-start}px`;
});

//change num of slides in arrow way
let num = 1;
let answer = `0${num}`;
console.log(`answer=${answer}`);
document.querySelector('.arrow_right').addEventListener('click', function (){
    num = num+1;
    if (num > 5) {
        num = 1;
    }
    return num;
});

document.querySelector('.arrow_left').addEventListener('click', function (){
    num = num-1;
    if (num < 1) {
        num = 5;
    }
    return num;
});

//change num of slides in squere way and tourn slide
document.querySelector(".slider_dots").addEventListener("click", function () {
    switch (/*содержимое спан*/) {
            case (1):
            num = 1;
            sliderTourn.style.transform = `${-start}px`;
            break;
            case (2):
                num = 2;
                sliderTourn.style.transform = `${-1000}px`;
                break;
                case (3):
                    num = 3;
                    sliderTourn.style.transform = `${-2000}px`;
                    break; 
                    case (4):
                        num = 4;
                        sliderTourn.style.transform = `${-3000}px`;
                        break; 
                         case (5):
                        num = 5;
                        sliderTourn.style.transform = `${-4000}px`;
                        break;                    
    }
});


//slider squeres






/*slider by arrows
let welcomContainer = document.querySelector(".welcom_photos_padding");
let slides = document.querySelector(".welcom_photos_padding");
let leftBtn = document.querySelector(".arrow_left");
let rightBtn = document.querySelector(".arrow_right");

let partsLength = slides.querySelectorAll("div").length;
let currentSlideIndex = 0;

rightBtn.addEventListener("click", () => changeSlide("right"));
leftBtn.addEventListener("click", () => changeSlide("left"));

let changeSlide = (direction) => {
    console.log("botan");
  let sliderHeight = welcomContainer.clientHeight;
  if (direction === "right") {
    currentSlideIndex++;
    if (currentSlideIndex > partsLength - 1) {
      currentSlideIndex = 0;
    }
  } else if (direction === "left") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = partsLength - 1;
    }
  }
  slides.style.transform = `translateY(-${
    currentSlideIndex * sliderHeight
  }px)`;
}; */
