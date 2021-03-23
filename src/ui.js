const ui = (() => {
  const renderPage = async (weather, unit = 'F') => {
    const {
      feelsLike, temp, tempMin, tempMax,
    } = weather.main;

    const { main, description } = weather.weather[0];
    const { name } = weather;
    const curDate = Date();

    document.getElementById('date').innerText = `${curDate}`;
    document.getElementById('name').innerText = `${name}, ${weather.sys.country} - ${Math.round(temp)}º${unit}`;
    document.getElementById('description').innerText = `${description.toUpperCase()} - ${main}`;
    document.getElementById('feels').innerText = `Current Temperature: ${Math.round(feelsLike)} º${unit}`;
    document.getElementById('temp').innerText = `Min temp ${Math.round(tempMin)} º${unit} - Max temp ${Math.round(tempMax)} º${unit}`;
    document.getElementById('toggeleUnits').innerText = `Change to º${
      unit === 'C' ? 'F' : 'C'}`;
  };

  return {
    renderPage,
  };
})();

export default ui;