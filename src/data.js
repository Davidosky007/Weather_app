const data = (() => {
  const getWeather = async (city, unit = 'F') => {
    const key = '9d544eaf8bd4972c4fd9ee909e1f3381';
    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${key}`,
      { mode: 'cors' });
    const weatherData = await getData.json();
    return weatherData;
  };
  return { getWeather };
})();

export default data;