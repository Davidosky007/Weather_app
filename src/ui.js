const ui = (() => {
  const renderPage = async (weather, unit = 'F') => {
    const {
      feels_like, temp, temp_min, temp_max,
    } = weather.main;

    const { main, description } = weather.weather[0];
    const { name } = weather;
    const curDate = Date();

    document.getElementById('date').innerText = `${curDate}`;
    document.getElementById('name').innerText = `${name}, ${weather.sys.country} - ${Math.round(temp)}º${unit}`;
    document.getElementById('description').innerText = `${description.toUpperCase()} - ${main}`;
    document.getElementById('feels').innerText = `Feels like: ${Math.round(feels_like)} º${unit}`;
    document.getElementById('temp').innerText = `Min temp ${Math.round(temp_min)} º${unit} - Max temp ${Math.round(temp_max)} º${unit}`;
    document.getElementById('toggeleUnits').innerText = `Change to º${
      unit === 'C' ? 'F' : 'C'}`;
  };

  return {
    renderPage,
  };
})();

export default ui;