(()=>{var e={422:()=>{const e=document.querySelector(".picture-inner-container");!function(t){let r=((l=t).sort((()=>Math.random()-.4)),l);var l;for(let l=0;l<t.length;l++){const t=document.createElement("img");t.classList.add("picture-gallery"),t.src=r[l],t.alt="galery",e.append(t)}}(["/assets/img/Gallery/galery1.jpg","/assets/img/Gallery/galery2.jpg","/assets/img/Gallery/galery3.jpg","/assets/img/Gallery/galery4.jpg","/assets/img/Gallery/galery5.jpg","/assets/img/Gallery/galery6.jpg","/assets/img/Gallery/galery7.jpg","/assets/img/Gallery/galery8.jpg","/assets/img/Gallery/galery9.jpg","/assets/img/Gallery/galery10.jpg","/assets/img/Gallery/galery11.jpg","/assets/img/Gallery/galery12.jpg","/assets/img/Gallery/galery13.jpg","/assets/img/Gallery/galery14.jpg","/assets/img/Gallery/galery15.jpg"])},55:()=>{let e=0;window.addEventListener("load",(function(){a()}));const t=document.querySelector(".welcom_pictures_photos"),r=(document.querySelector(".text_white_gold"),document.querySelector(".slider_dots")),l=document.querySelectorAll(".welcom_photos_padding").length-1,s=r.querySelectorAll(".slider_item");document.querySelector(".arrow_right").addEventListener("click",(function(){console.log("right"),e+=1,e>l&&(e=0),a()})),document.querySelector(".arrow_left").addEventListener("click",(function(){console.log("left"),e-=1,e<0&&(e=l),a()}));for(let t=0;t<s.length;t++){let r=s[t];r.addEventListener("click",(function(){console.log("squere"),e=r.querySelector("span").innerText-1,a()}))}function a(){i(),g(s[e]),o(),n()}const o=()=>{document.querySelector(".number_written").textContent=`0${e+1}| 05`},n=()=>{t.style.transform=`translateX(-${e}000px)`},i=()=>{document.querySelectorAll(".slider_dots .slider_item").forEach((e=>{e.classList.remove("item-gold"),e.classList.add("item")}))},g=e=>{e.classList.add("item-gold"),e.classList.remove("item")}}},t={};function r(l){var s=t[l];if(void 0!==s)return s.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(55),r(422)})()})();