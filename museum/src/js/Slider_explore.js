let workValue = 100;

const sliderLine = document.querySelector('.img_comp_slider');
const widthPhote = document.querySelector('.hidden-phote');

window.addEventListener('mousemove', function () {
    getValue();
})


function getValue() {
   let inputValue = document.getElementById('picture-explore-input');
   workValue = inputValue.value;
   console.log(`workValue=${workValue}`); 
   updateSliderLine();
   updatePhotoWidth();
   console.log(`sliderLine=${sliderLine.style.transform}`); 
}

const updateSliderLine = () => {
     sliderLine.style.transform = `translateX(${10+0.95*workValue+workValue*5.6}px)`;
    }
    


const updatePhotoWidth = () => {
    widthPhote.style.width = `${workValue}%`;
}