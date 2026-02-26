const apiKEY = "65d47e0ef2707d66dfa156f916cb131b";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchCity = document.querySelector(".search input");
const searchCityBtn = document.querySelector(".search button");
const weatherCondition = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKEY}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherCondition.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherCondition.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherCondition.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherCondition.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherCondition.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherCondition.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
        
}

searchCityBtn.addEventListener("click", ()=>{
    checkWeather(searchCity.value);
})

