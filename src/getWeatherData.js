async function getWeatherData(country) {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&cnt=3&APPID=4f656779e97d60de8d6032708f670f5e`
    );
    if (!response.ok) throw new Error('Unknown city');
    else {
      const weatherData = await response.json();
      console.log(weatherData);
    }
  } catch (error) {
    alert(error);
  }
}

export default getWeatherData;
