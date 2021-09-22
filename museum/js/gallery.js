function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const pictureInnerContainer = document.querySelector(
  ".picture-inner-container"
);

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
shuffle(galleryImgArr);
galleryImgArr.forEach((el) => {
  const img = document.createElement("img");
  img.classList.add("picture-gallery");
  img.src = el;
  img.alt = `gallery`;
  pictureInnerContainer.append(img);
});
