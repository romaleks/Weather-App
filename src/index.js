import './styles/main.scss';
import getWeatherData from './getWeatherData';
import setWeatherIcon from './setWeatherIcon';

async function runApp(country) {
  const tempParam = document.querySelector('.temp span');
  const descParam = document.querySelector('.desc');
  const pressureParam = document.querySelector('#pressure');
  const humidityParam = document.querySelector('#humidity');
  const windParam = document.querySelector('#wind');

  const weatherData = await getWeatherData(country);
  setWeatherIcon(weatherData.icon);

  tempParam.textContent = Math.round(weatherData.temp);
  descParam.textContent = weatherData.desc;
  pressureParam.textContent = weatherData.pressure + 'hpa';
  humidityParam.textContent = weatherData.humidity + '%';
  windParam.textContent = weatherData.windSpeed + 'm/s';
}

runApp('Moscow');
