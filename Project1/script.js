
const apiKey = "e1a9299ee317632039eff62412cb848d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// you can use this api url in broswer to see the data
// const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchInput = document.querySelector(".search input"); // search class input field is selected by js
const searchbtn = document.querySelector(".search button");  // search class button is selected by js
const weatherIcon = document.querySelector(".weather-icons"); // weather class img is selected by js

async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apiKey);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name; // the name of the city from the api is in "name" key
        // line 22 city is selected by js
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"; // the name of the city from the api is in "main" key
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"; // the name of the city from the api is in "main" key
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr"; // the name of the city from the api is in "main" key
        // this will override their values with the values from the api
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}
searchbtn.addEventListener("click", () => {
    getWeatherData(searchInput.value);
}); 
