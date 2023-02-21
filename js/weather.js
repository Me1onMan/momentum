const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=en&appid=90e166c017ac61a4ab7f663419c4da04&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp, data.wind.speed, data.main.humidity);

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `Wind speed: ${data.wind.speed} m/s`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
}

getWeather()