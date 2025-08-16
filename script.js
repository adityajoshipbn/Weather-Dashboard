const apiKey = "99594d21ce0245e057fc3070433349bd"; // Replace with your API Key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        alert("An error occurred: " + error.message);
    }
}

function displayWeather(data) {
    const { name, main, weather, wind } = data;

    document.getElementById("city").innerText = `📍 City: ${name}`;
    document.getElementById("temp").innerText = `🌡 Temperature: ${main.temp}°C`;
    document.getElementById("weather").innerText = `🌤 Weather: ${weather[0].description}`;
    document.getElementById("humidity").innerText = `💧 Humidity: ${main.humidity}%`;
    document.getElementById("wind").innerText = `💨 Wind Speed: ${wind.speed} km/h`;

    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;

    document.getElementById("weatherDisplay").classList.remove("hidden");
}

function searchWeather() {
    let city = document.getElementById("cityInput").value.trim();
    
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }
    
    getWeather(city);
}
