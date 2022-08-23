async function getWeatherData(city, units) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&cnt=3&APPID=4f656779e97d60de8d6032708f670f5e`
    );
    if (!response.ok) throw new Error('Unknown city');
    else {
      const weatherData = await response.json();
      return getNeededData(weatherData);
    }
  } catch (error) {
    alert(error);
  }
}

function getNeededData(data) {
  return {
    name: data.name,
    temp: data.main.temp,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    desc: transformDesc(data.weather[0].description),
    icon: data.weather[0].icon,
  };
}

function transformDesc(desc) {
  const correctArr = desc.split(' ').map(word => word[0].toUpperCase() + word.slice(1));
  return correctArr.join(' ');
}

function changeUnits(element) {
  if (element.getAttribute('data-celsius') === 'true') {
    element.textContent = '°F';
    element.setAttribute('data-celsius', 'false');
    return 'standart';
  } else {
    element.textContent = '°C';
    element.setAttribute('data-celsius', 'true');
    return 'metric';
  }
}

export { getWeatherData, changeUnits };
