import './sass/main.scss';
import fetchCountries from './fetchCountries';

import listCountries from './templates/list-countries.hbs';
import oneCountry from './templates/one-country.hbs';

import debounce from 'lodash.debounce';

const inputEl = document.querySelector('.country__search');
const boxCountryEl = document.querySelector('.country__list');

inputEl.addEventListener('input', debounce(foundCountries, 500));

function foundCountries(e) {
  const name = e.target.value;

  fetchCountries(name)
    .then(country => {
      //   console.log(country);
      if (country.length > 10) {
        console.log('сделать запрос более специфичным');
      } else {
        const countries = country.length < 2 ? oneCountry(country) : listCountries(country);
        boxCountryEl.innerHTML = countries;
      }
    })
    .catch(error => {
      //   console.log(`ошибочка`);
      console.log(error);
      notFound();
      //   boxCountryEl.innerHTML = '';
    });
}

function notFound() {
  boxCountryEl.innerHTML = '';
}
