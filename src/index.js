import './sass/main.scss';
import '@pnotify/core/dist/BrightTheme.css';
import { error, Stack } from '@pnotify/core';

import fetchCountries from './fetchCountries';

import listCountries from './templates/list-countries.hbs';
import oneCountry from './templates/one-country.hbs';

import debounce from 'lodash.debounce';

const inputEl = document.querySelector('.country__search');
const boxCountryEl = document.querySelector('.country__list');
const textSpecific = 'Сделайте запрос более специфичным!';
const textNotFound = 'Ничего не найдено!';

const myError = text => {
  error({
    text: text,
    delay: 500,
    sticker: false,
    closer: false,
    stack: new Stack({
      dir1: 'down',
      dir2: 'left',
    }),
  });
};

inputEl.addEventListener('input', debounce(foundCountries, 500));

function foundCountries(e) {
  const name = e.target.value;

  fetchCountries(name)
    .then(country => {
      //   console.log(country);
      if (country.length > 10) {
        clearList();
        console.log('сделать запрос более специфичным');
        myError(textSpecific);
      } else {
        const countries = country.length < 2 ? oneCountry(country) : listCountries(country);
        boxCountryEl.innerHTML = countries;
      }
    })
    .catch(error => {
      console.log(error);
      clearList();
      myError(textNotFound);
    });
}

function clearList() {
  boxCountryEl.innerHTML = '';
}
