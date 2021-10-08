let start = 0; //1-й модуль
let currentNum = 0;

window.addEventListener('load', function () {
    updateState();
})

const sliderTourn = document.querySelector('.welcom_pictures_photos');
const numChange =document.querySelector('.text_white_gold');
const currentDot = document.querySelector('.slider_dots');
const numMax = document.querySelectorAll('.welcom_photos_padding').length-1;
const arr = currentDot.querySelectorAll('.slider_item');

document.querySelector('.arrow_right').addEventListener('click', function (){
    console.log("right");
    currentNum = currentNum+1;
    if (currentNum > numMax) {
        currentNum = 0;
    };
    updateState();

})

document.querySelector('.arrow_left').addEventListener('click', function (){
    console.log("left");
    currentNum = currentNum-1;
    if (currentNum < 0) {
        currentNum = numMax;
    };
    updateState();
});

for (let i=0; i<arr.length; i++) {
    let elem = arr[i];
    elem.addEventListener('click', function (){
        console.log("squere");
        currentNum = elem.querySelector("span").innerText-1;
        updateState();
    });
}

function updateState() {
    removeSelectedDote();
    selectClicedDote(arr[currentNum]);
    numerInSpan();
    updatePicture();
}

const numerInSpan = () => {
    document.querySelector('.number_written').textContent = `0${currentNum+1}| 05`; 
}

const updatePicture = () => {
    sliderTourn.style.transform = `translateX(-${currentNum}000px)`;
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
