import data from './data';
import ui from './ui';

const renderError = () => {
  const errorContainer = document.getElementById('error-msg');
  errorContainer.textContent = 'Sorry... The city was not found.';
  setTimeout(() => { document.getElementById('error-msg').innerHTML = ''; }, 5000);
};
// eslint-disable-next-line no-unused-vars
const controller = ((getWeather, ui) => {
  let wD;
  let units = 'F';
  const toggleUnits = (units) => (units === 'F' ? 'imperial' : 'metric');
  const searchVal = document.getElementById('searchInput');

  const resetValue = (searchVal) => {
    searchVal.value = '';
  };


  /* eslint-disable consistent-return */
  const defaultWeather = async (city = 'Lagos', unit = 'imperial') => {
    try {
      const result = await getWeather(city, unit);
      ui.renderPage(result, units);
      wD = await result;
      return result;
    } catch (e) {
      renderError();
    }
  };

  const handleClick = (event) => {
    if (event.target.id === 'searchInput') {
      resetValue(searchVal);
    } else if (event.target.id === 'toggeleUnits') {
      // eslint-disable-next-line no-unused-expressions
      event.peventDefault;
      units = units === 'F' ? 'C' : 'F';
      defaultWeather(wD.name, toggleUnits(units));
    } else if (searchVal.value) {
      defaultWeather(searchVal.value, toggleUnits(units));
      resetValue(searchVal);
    }
  };

  const myKeyPress = (event) => {
    if (searchVal.value && event.which === 13) {
      defaultWeather(searchVal.value, toggleUnits(units));
    }
  };

  defaultWeather();

  searchVal.addEventListener('click', handleClick);
  searchVal.addEventListener('click', myKeyPress);
  document.getElementById('searchBtn').addEventListener('click', handleClick);
  document.getElementById('toggeleUnits').addEventListener('click', handleClick);
})(data, ui);