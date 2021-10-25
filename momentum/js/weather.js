//https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=7f8eaf2d4414afefe5ad05ef38c21fd6&units=metric

const temperature = document.querySelector(".temperature");
const weatherDescription = document.querySelector(".weather-description");
const windspeed = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.getElementById("city");
const weatherIcon = document.querySelector(".weather-icon");
const weatherError = document.querySelector(".weather-error");

city.addEventListener("change", getWeather);

async function getWeather() {  
   try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=7f8eaf2d4414afefe5ad05ef38c21fd6&units=metric`;
        const res = await fetch(url);
        const data = await res.json(); 
        //в консоли номер иконки +температура+орисание+скорость+влажность
        temperature.innerText = `${Math.round(data.main.temp)}°C`;
        weatherDescription.innerText = data.weather[0].description;
        windspeed.innerText = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.innerText = `Humidity: ${data.main.humidity}%`;
        weatherError.innerText = ``;
        weatherIcon.className = '';
        weatherIcon.classList.add(`weather-icon`, `owf`, `owf-${data.weather[0].id}`);
    } catch (error) {
      weatherError.innerText = `Error! city not found for ${city.value}!`;
      weatherIcon.className = '';
      temperature.innerText = ``;
      windspeed.innerText = ``;
      weatherDescription.innerText = ``;
      humidity.innerText = ``;
}
}
  
  //определяем город в хранилище
function setLocalStorage() {
  localStorage.setItem('city', city.value);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener("load", getLocalStorage);
window.addEventListener("load", getWeather);


// console.log(data.weather[0].id, data.main.temp, data.weather[0].description, data.wind.speed, data.main.humidity);