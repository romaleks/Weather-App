import './styles/main.scss';
import getWeatherData from './getWeatherData';
import setWeatherIcon from './setWeatherIcon';

async function runApp(city, ev) {
  if (ev) ev.preventDefault();

  let weatherData = await getWeatherData(city);
  setWeatherIcon(weatherData.icon);

  cityInput.value = weatherData.name;
  tempParam.textContent = Math.round(weatherData.temp);
  descParam.textContent = weatherData.desc;
  pressureParam.textContent = weatherData.pressure + 'hpa';
  humidityParam.textContent = weatherData.humidity + '%';
  windParam.textContent = weatherData.windSpeed + 'm/s';

  if (weatherData.icon.indexOf('n') !== -1) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

const cityForm = document.querySelector('form');
const cityInput = document.querySelector('input');
const tempParam = document.querySelector('.temp span');
const descParam = document.querySelector('.desc');
const pressureParam = document.querySelector('#pressure');
const humidityParam = document.querySelector('#humidity');
const windParam = document.querySelector('#wind');

cityForm.addEventListener('submit', ev => {
  runApp(cityInput.value, ev);
  cityInput.blur();
});

runApp('Moscow');
