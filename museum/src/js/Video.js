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

//small player

