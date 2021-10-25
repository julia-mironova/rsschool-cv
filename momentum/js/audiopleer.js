
const gimn = document.querySelectorAll(".gimn");

const liColor = document.querySelector('li'); //только первый элемент играет и красит

const changeBtn = document.querySelector(".change-btn");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");
const audio = new Audio();

//let numToSrc = num0;
let num0 = "assets/audio/hope-gimn.mp3";
let num1 = "assets/audio/love-gimn.mp3";
let num2 = "assets/audio/student-gimn.mp3";
let num3 = "assets/audio/victory-gimn.mp3";


function getSongNext() {

}




function playAudio() {
  audio.src = `${num0}`;
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
function changeBtnOn() {
    changeBtn.classList.toggle('pause');
    changeBtn.classList.toggle('play');
    liColor.classList.toggle('yellow');
    if (changeBtn.classList.contains('play')) {
        pauseAudio();
        
    } else {
        
        playAudio();
    }
  }

changeBtn.addEventListener('click', changeBtnOn);




