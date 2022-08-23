import './styles/main.scss';
import getWeatherData from './getWeatherData';
import setWeatherIcon from './setWeatherIcon';

async function runApp() {
  const weatherData = await getWeatherData('Moscow');
  setWeatherIcon(weatherData.icon);
}

runApp();
