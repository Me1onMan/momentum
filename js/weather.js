const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const cityField = document.querySelector('.city');

let url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=85f75a5a4ec6ecc275980c9452b37b07&units=metric`;

async function getWeather() {  
    //const url = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&lang=en&appid=85f75a5a4ec6ecc275980c9452b37b07&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
}

function changeWeather() {
    const city = cityField.value;
    console.log(city);
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=85f75a5a4ec6ecc275980c9452b37b07&units=metric`;
    getWeather();
}

getWeather()

cityField.addEventListener('change', changeWeather);