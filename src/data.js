const getWeather = async (city, unit = 'F') => {
  const key = '26b92a02cedbcea26aeee0df5d80ea33';
  const getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${key}`,
    { mode: 'cors' });

  if (getData.ok) {
    const data = await getData.json();
    return data;
  }
  throw new Error('Unable to fetch the weather data');
};

export default getWeather;