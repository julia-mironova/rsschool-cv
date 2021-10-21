//weather create part

//https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=7f8eaf2d4414afefe5ad05ef38c21fd6&units=metric



async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Wroclaw&lang=en&appid=7f8eaf2d4414afefe5ad05ef38c21fd6&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  }
  getWeather();