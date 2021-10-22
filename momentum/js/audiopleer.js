
const gimn = document.querySelectorAll(".gimn");
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
let isPlay = false;
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const changeBtn = document.querySelector(".change-btn");
const audio = new Audio();

function playAudio() {
  audio.src = 'assets/audio/victory-gimn.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
function changeBtnOn() {
    changeBtn.classList.toggle('pause');
    changeBtn.classList.toggle('play');
    if (changeBtn.classList.contains('play')) {
        pauseAudio();
    } else {
        
        playAudio();
    }
  }

changeBtn.addEventListener('click', changeBtnOn);




/*play.addEventListener("click", audioIcon);

function audioIcon() {
    if (play) {
       //audio.play();
       let element = document.getElementById("play");
       element.classList.remove("play");
    } else {
       // audio.pause();
       play.className = '';
       play.classList.add(`play`, `player-icon`);
    }
}  */