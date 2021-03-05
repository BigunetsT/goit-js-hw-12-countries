import { pluginError, pluginNotice } from './pluginOn';
import updateCountriesMarkup from './updateCountriesMarkup';
import createCountriesList from './createCountriesList';
import fetchCountries from './fetchCountries';
import refs from './refs';

function searchInputHandler(event) {
  clear();
  const searchQuery = event.target.value;
  if (!searchQuery) {
    pluginNotice();
  }
  fetchCountries(searchQuery).then(countries => {
    checkCountryAmount(countries);
  });
}

function checkCountryAmount(countries) {
  if (countries.length > 10) {
    pluginError();
  } else if (countries.length === 1) {
    updateCountriesMarkup(countries);
  } else if (countries.length <= 10 && countries.length > 1) {
    createCountriesList(countries);
  } else if (!countries.length) {
    alert('Country not found. Please try again');
    refs.inputRef.value = '';
  }
}

function clear() {
  refs.countriesContainer.innerHTML = '';
}

export default searchInputHandler;
