//big player
let video = document.querySelector(".big-video-individ");
let bigPlay = document.querySelector(".player-play-big");
let play = document.querySelector(".player-play-normal");
let pauseImg = document.querySelector(".toPause");
let progressVideo = document.querySelector(".progress-video");
let progressSound = document.querySelector(".progress-sound");
let fullScreen = document.querySelector(".screen-full");
let skipBtns = document.querySelectorAll("[data-skip]");
let soundOf = document.querySelector(".player-sound");
let soundImg = document.querySelector(".noSound");
let screenImg = document.querySelector(".screenBig");

function videoStatus() {
  if (video.paused) {
    video.play();
    pauseImg.src = "assets/img/Video/player-btn/pause.png";
  } else {
    video.pause();
    pauseImg.src = "assets/img/Video/player-btn/play.png";
  }
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function changeRange() {
  video[this.name] = this.value;
}

function soundOnOf() {
  if (progressSound.value != 0) {
    soundImg.src = "assets/img/Video/player-btn/soundOf.png";
    progressSound.value = "0";
  } else {
    soundImg.src = "assets/img/Video/player-btn/sound.png";
    progressSound.value = "0.6";
  }
}

function videoPracentege() {
  let precent = (video.currentTime / video.duration) * 100;
  progressVideo.value = `${precent}`;
}

function screen() {
  console.log(`video height is ${video.style}`);
  if (window.getComputedStyle(video).height == "630px") {
    screenImg.src = "assets/img/Video/player-btn/screenSmall.png";
    video.style.height = "950px";
  } else {
    screenImg.src = "assets/img/Video/player-btn/screenSmall.png";
    video.style.height = "630px";
  }
}

play.addEventListener("click", videoStatus);
//bigPlay.addEventListener("click", videoStatus);
video.addEventListener("click", videoStatus);
soundOf.addEventListener("click", soundOnOf);
progressVideo.addEventListener("change", changeRange);
progressSound.addEventListener("change", changeRange);
video.addEventListener("timeupdate", videoPracentege);
fullScreen.addEventListener("click", screen);

skipBtns.forEach((button) => button.addEventListener("click", skip));

console.log("video");

//Video slider small


let currentNumVideo = 0;

window.addEventListener('load', function () {
    updateVideoSliderState();
})

const videosContainer = document.querySelector('.video-small');
const arrVideoSrc = document.querySelectorAll('.player-small');
const arrStringSrcInVideo = Array.from(document.querySelectorAll('.player-small')).map(s=>s.src);

const currenVideoSlidertDot = document.querySelector('.video_slider_dots');
const numMaxVideoSlider = arrVideoSrc.length-1;
const arrVideoSlider = currenVideoSlidertDot.querySelectorAll('.video_circle');

document.querySelector('.arrow_right_video').addEventListener('click', function (){
    console.log("right");
    currentNumVideo = currentNumVideo+1;
    if (currentNumVideo > numMaxVideoSlider) {
        currentNumVideo = 0;
    };
    updateVideoSliderState();

})

document.querySelector('.arrow_left_video').addEventListener('click', function (){
    console.log("left");
    currentNumVideo = currentNumVideo-1;
    if (currentNumVideo < 0) {
        currentNumVideo = numMaxVideoSlider;
    };
    updateVideoSliderState();
});
/*
document.querySelector('.welcom_Videos_photos').addEventListener('click', function (){
    console.log("mouse-Video-change");
    currentNumVideo = currentNumVideo+1;
    if (currentNumVideo > numMaxVideoSlider) {
        currentNumVideo = 0;
    };
    updateVideoSliderState();
});*/

for (let i=0; i<arrVideoSlider.length; i++) {
    let elem = arrVideoSlider[i];
    elem.addEventListener('click', function (){
        console.log("circkle");
        currentNumVideo = i;
        updateVideoSliderState();
    });
}

function updateVideoSliderState() {
    removeSelectedDoteVideo();
    selectClicedDoteVideo(arrVideoSlider[currentNumVideo]);
    updateVideo();
}



const updateVideo = () => {
    arrVideoSrc[2].src= arrStringSrcInVideo[currentNumVideo];
    if (currentNumVideo+1 <= numMaxVideoSlider) {
    arrVideoSrc[3].src = arrStringSrcInVideo[currentNumVideo+1];
    } else {
        arrVideoSrc[3].src = arrStringSrcInVideo[0]; 
    }
    if (currentNumVideo+2 <= numMaxVideoSlider) {
    arrVideoSrc[4].src = arrStringSrcInVideo[currentNumVideo+2];
    } else if (currentNumVideo+1 <= numMaxVideoSlider) {
        arrVideoSrc[4].src = arrStringSrcInVideo[0];
    } else {
        arrVideoSrc[4].src = arrStringSrcInVideo[1]; 
    }
}
const removeSelectedDoteVideo = () => {
    let dots = document.querySelectorAll(".video_slider_dots .video_circle");
    dots.forEach(item => {
        item.classList.remove("item_red");
        item.classList.add("item_grey");
    })
}

const selectClicedDoteVideo = (clikedDote) => {
    clikedDote.classList.add("item_red");
    clikedDote.classList.remove("item_grey");
}
