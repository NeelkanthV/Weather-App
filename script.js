const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {

	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();
	console.log(data);
	document.querySelector(".description").innerHTML = data.weather[0].description;
	document.querySelector(".feels_like").innerHTML = Math.round(data.main.feels_like) + "°C";
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "images/clouds.gif";
		document.body.style.backgroundImage = "url('images/clouds.jpg')";
	}
	else if (data.weather[0].main == "Rain") {
		weatherIcon.src = "images/rain.gif";
		document.body.style.backgroundImage = "url('images/rain.jpg')";
	}
	else if (data.weather[0].main == "Clear") {
		weatherIcon.src = "images/sunny.gif";
		document.body.style.backgroundImage = "url('images/clear.jpg')";
	}
	else if (data.weather[0].main == "Smoke") {
		weatherIcon.src = "images/smoke.png";
	}
	else if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "images/drizzle.png";
		document.body.style.backgroundImage = "url('images/drizzle.jpg')";
	}
	else if (data.weather[0].main == "fog") {
		weatherIcon.src = "images/mist.png";
		document.body.style.backgroundImage = "url('images/MI.jpg')";
	}
	else if (data.weather[0].main == "Haze") {
		weatherIcon.src = "images/haze.png";
		document.body.style.backgroundImage = "url('images/haze.jpg')";
	}
	else if (data.weather[0].main == "Snow") {
		weatherIcon.src = "images/snow.gif";
		document.body.style.backgroundImage = "url('images/snow.jpg')";
	}
	else if (data.weather[0].main == "Thunderstorm") {
		weatherIcon.src = "images/storm.gif";
		document.body.style.backgroundImage = "url('images/storm.jpg')";
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
})
