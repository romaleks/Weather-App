async function setWeatherIcon(iconCode) {
  const img = document.querySelector('img');
  img.src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

export default setWeatherIcon;
