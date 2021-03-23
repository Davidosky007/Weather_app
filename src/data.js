const data = (() => {
  const getWeather = async (city, unit = 'F') => {
    const key = '26b92a02cedbcea26aeee0df5d80ea33';
    const getData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${key}`,
      { mode: 'cors' });
    const weatherData = await getData.json();
    return weatherData;
  };
  return { getWeather };
})();

export default data;