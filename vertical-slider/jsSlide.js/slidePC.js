let mainContainer = document.querySelector(".main-container");
let partRight = document.querySelector(".right-part");
let partLeft = document.querySelector(".left-part");
let upBtn = document.querySelector(".up-btn");
let downBtn = document.querySelector(".down-btn");
let leftBtn = document.querySelector(".left-btn");
let rightBtn = document.querySelector(".right-btn");

let partsLength = partRight.querySelectorAll("div").length;
let currentSlideIndex = 0;

partLeft.style.top = `-${(partsLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));
rightBtn.addEventListener("click", () => changeSlide("right"));
leftBtn.addEventListener("click", () => changeSlide("left"));

let changeSlide = (direction) => {
  let sliderHeight = mainContainer.clientHeight;
  if (direction === "up" || direction === "right") {
    currentSlideIndex++;
    if (currentSlideIndex > partsLength - 1) {
      currentSlideIndex = 0;
    }
  } else if (direction === "down" || direction === "left") {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
      currentSlideIndex = partsLength - 1;
    }
  }
  partRight.style.transform = `translateY(-${
    currentSlideIndex * sliderHeight
  }px)`;
  partLeft.style.transform = `translateY(${
    currentSlideIndex * sliderHeight
  }px)`;
};
