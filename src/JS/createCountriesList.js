import refs from './refs';

function createCountriesList(countries) {
  countries.map(country => {
    refs.countriesContainer.insertAdjacentHTML(
      'beforeend',
      `<li class="countries-list-all">${country.name}</li>`,
    );
  });
}

export default createCountriesList;
