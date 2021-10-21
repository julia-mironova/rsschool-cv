const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

async function getQuotes() {  
    const quotes = '../json/citaty.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    console.log(data);
  }
  getQuotes();