async function fetchWeatherData(CityName) {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=5dbb5531924724ea3ed6aca74e737a86`
	const response = await fetch(url)
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML= data.name;
	let windSpeed = document.getElementById("wind_speed");
	windSpeed.innerHTML= data.wind.speed +" km/hr";
	let humidity = document.getElementById("humidity");
	humidity.innerHTML= data.main.humidity+" g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML= Math.round((data.main.temp)-273.15)+"";
	console.log(data)
}
//demo()

function fetchCity(){
	let cityName = document.getElementById("cityname");
	if(cityName.value===""){
		alert("Enter a City Name");

	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
}