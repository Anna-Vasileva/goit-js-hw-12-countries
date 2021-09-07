// const name = 'ru';
// fetch(`https://restcountries.eu/rest/v2/name/${name}`)
//   .then(response => {
//     // console.log(response.json());
//     return response.json();
//   })
//   .then(country => {
//     console.log(country);
//     const countries = listCountries(country);
//     console.log(countries);
//     // sectionCountryEl.insertAdjacentHTML('afterend', countries);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// function showCountries() {

// }
export default function fetchCountries(searchQuery) {
  if (!searchQuery.trim()) return;
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      // console.log(response.json());
      return response.json();
    })
    .then(country => {
      console.log(country);
      // const countries = listCountries(country);
      //   console.log(countries);
      return country;
      // sectionCountryEl.insertAdjacentHTML('afterend', countries);
    });
  // .catch(error => {
  //   console.log(error);
  // });
}
