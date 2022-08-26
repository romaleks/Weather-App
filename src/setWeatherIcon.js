async function setWeatherIcon(iconCode) {
	const img = document.querySelector('#weather-icon')
	img.src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`
}

export default setWeatherIcon
