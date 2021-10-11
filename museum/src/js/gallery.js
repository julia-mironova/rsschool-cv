const galleryImgArr = [
  "/assets/img/Gallery/galery1.jpg",
  "/assets/img/Gallery/galery2.jpg",
  "/assets/img/Gallery/galery3.jpg",
  "/assets/img/Gallery/galery4.jpg",
  "/assets/img/Gallery/galery5.jpg",
  "/assets/img/Gallery/galery6.jpg",
  "/assets/img/Gallery/galery7.jpg",
  "/assets/img/Gallery/galery8.jpg",
  "/assets/img/Gallery/galery9.jpg",
  "/assets/img/Gallery/galery10.jpg",
  "/assets/img/Gallery/galery11.jpg",
  "/assets/img/Gallery/galery12.jpg",
  "/assets/img/Gallery/galery13.jpg",
  "/assets/img/Gallery/galery14.jpg",
  "/assets/img/Gallery/galery15.jpg",
];
function shuffle(array) {
  array.sort(() => Math.random() - 0.4);
  return array;
}

const pictureInnerContainer = document.querySelector(
  ".picture-inner-container"
);

function toArrgallery(galleryImgArr) {
  let imgArr = shuffle(galleryImgArr);
  for (let i = 0; i < galleryImgArr.length; i++) {
    const img = document.createElement("img");
    img.classList.add("picture-gallery");
    img.src = imgArr[i];
    img.alt = `galery`;
    pictureInnerContainer.append(img);
    
  }
}
toArrgallery(galleryImgArr);

//make a poetapnoe view of pictures
window.addEventListener('load', function () {
  
});

//Gallery photo by height
//.picture-gallery: opasiti from 0 to 1 transition: 0.7s ease-in-out;
function mouseTimeToScroll(func, wait=50, immediate = true) {
  var timeout;
  return function() {
    var contex = this, args = arguments;
    
    var later = function() {
      timeout = null;
      if (!immediate) func.applay(context, args);
    };
    var callnow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callnow) func.applay(context, args);
  };

};

// mouseTimeToScroll(checkPhotoPosition) - context =this(?

const photoGoImages = document.querySelectorAll('.picture-gallery');

function checkPhotoPosition(e) {
  photoGoImages.forEach(photoGo => {
    const photoInPos = (window.scrollY+window.innerHeight)-photoGo.height/20;
    const photoBottom = photoGo.offsetTop + photoGo.height; 
    const photoHalfShown = photoInPos> photoBottom;
    const notScrolledPast = window.scrollY < photoBottom;
    if (photoHalfShown && notScrolledPast) {
      photoGo.classList.add('active');
    } else {
      photoGo.classList.remove('active');
    }                                         
    
  })
}

window.addEventListener('scroll', checkPhotoPosition);