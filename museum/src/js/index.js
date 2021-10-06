import {Article} from "../js/Article"

window.onload = function () {
    console.log("pila psik");

    //tags
    addTagsClickHandler();
}

const addTagsClickHandler = () => {
     document.querySelector(".slider_dots").addEventListener("click", (e) => {
       if (e.target.classList.contains("slider_item")) {
           let clikedDote = e.target;
            removeSelectedDote();
            selectClicedDote(clikedDote);

       }
     })
}

const removeSelectedDote = () => {
    let dots = document.querySelectorAll(".slider_dots .slider_item");
    dots.forEach(item => {
        item.classList.remove("item-gold");
        item.classList.add("item");
    })
}

const selectClicedDote = (clikedDote) => {
    clikedDote.classList.add("item-gold");
    clikedDote.classList.remove("item");
}