let video = document.querySelector(".video");
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
    pauseImg.src = "img/Museum/pause.png";
  } else {
    video.pause();
    pauseImg.src = "img/Museum/play.png";
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
    soundImg.src = "img/Museum/soundOf.png";
    progressSound.value = "0";
  } else {
    soundImg.src = "img/Museum/sound.png";
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
    screenImg.src = "img/Museum/screenSmall.png";
    video.style.height = "950px";
  } else {
    screenImg.src = "img/Museum/screenSmall.png";
    video.style.height = "630px";
  }
}

play.addEventListener("click", videoStatus);
bigPlay.addEventListener("click", videoStatus);
video.addEventListener("click", videoStatus);
soundOf.addEventListener("click", soundOnOf);
progressVideo.addEventListener("change", changeRange);
progressSound.addEventListener("change", changeRange);
video.addEventListener("timeupdate", videoPracentege);
fullScreen.addEventListener("click", screen);

skipBtns.forEach((button) => button.addEventListener("click", skip));

/*function fiveSecNext() {
  video.carrentTime = (video.carrentTime / video.duration) * 5;
  video.play();
}

$('#play_button').click(function(){
$('video')[0].play();
})

next5s.addEventListener("click", fiveSecNext);*/
