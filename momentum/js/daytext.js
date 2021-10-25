const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");

window.addEventListener("load", getQuotes);
changeQuote.addEventListener("click", getQuotes);

let i;
  function randomI() {
    i = Math.floor(Math.random() *10);
    if (i === 0) {
    return 1;
      }
      return i;
  }

async function getQuotes() {  
    const quotes = '../json/citaty.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    i = randomI();
    quote.innerText = `${data[i].text}`;
    author.innerText = `${data[i].author}`;
    //console.log(data);
}
  
  