import './sass/main.scss';
import fetchCountries from './fetchCountries';

import listCountries from './templates/list-countries.hbs';
import oneCountry from './templates/one-country.hbs';

const inputEl = document.querySelector('.country__search');
const boxCountryEl = document.querySelector('.country__list');

inputEl.addEventListener('input', foundCountries);

function foundCountries(e) {
  const name = e.target.value;

  fetchCountries(name).then(country => {
    if (country.length > 10) {
      console.log('сделать запрос более специфичным');
    } else {
      const countries = country.length < 2 ? oneCountry(country) : listCountries(country);
      boxCountryEl.innerHTML = countries;
    }
  });
}
