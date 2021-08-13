let items = document.querySelectorAll(".courusel .item");
let currentItem = 0;
let isEnabled = true;

document.querySelector(".control.down").addEventListener("click", function () {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector(".control.up").addEventListener("click", function () {
  if (isEnabled) {
    nextItem(currentItem);
  }
});

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationed", function () {
    this.classList.remove("active", direction);
  });
}
function showItem(direction) {
  items[currentItem].classList.add("next", direction);
  items[currentItem].addEventListener("animationed", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isEnabled = true;
  });
}

function nextItem(n) {
  hideItem("to-down");
  changeCurrentItem(n + 1);
  showItem("from-up");
}

function previousItem(n) {
  hideItem("to-up");
  changeCurrentItem(n - 1);
  showItem("from-down");
}

const swipedetect = (el) => {
  let surface = el;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;
  let startTime = 0;
  let elapsedTime = 0;
  let threshold = 150;
  let restraint = 100;
  let allowedTime = 300;
  surface.addEventListener(
    "mousedown",
    function (e) {
      startX = e.pageX;
      startY = e.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );
  surface.addEventListener(
    "mouseup",
    function (e) {
      disX = e.pageX - startX;
      disY = e.pageY - startY;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) >= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem);
            } else {
              if (isEnabled) {
                previousItem(currentItem);
              }
            }
          }
        }
      }
      e.preventDefault();
    },
    false
  );
  surface.addEventListener(
    "touchstart",
    function (e) {
      if (
        e.target.classList.contains("arrow") ||
        e.target.classList.contains("control")
      ) {
        if (e.target.classList.contains("down")) {
          if (isEnabled) {
            previousItem(currentItem);
          }
        } else {
          if (isEnabled) {
            nextItem(currentItem);
          }
        }
      }
      let touchobj = e.changedTouches[0];
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      e.preventDefault();
    },
    false
  );
  surface.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    false
  );
  surface.addEventListener(
    "touchend",
    function (e) {
      let touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX;
      distY = touchobj.pageY - startY;
      elapsedTime = new Date().getTime() - startTime;
      if (elapsedTime <= allowedTime) {
        if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
          if (distX > 0) {
            if (isEnabled) {
              previousItem(currentItem);
            }
          } else {
            if (isEnabled) {
              nextItem(currentItem);
            }
          }
        }
      }
      e.preventDefault();
    },
    false
  );
};
let el = document.querySelector(".courusel");
swipedetect(el);
