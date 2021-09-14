export default function fetchCountries(searchQuery) {
  //   if (!searchQuery.trim()) {
  //     //   document.querySelector('.country__list').innerHTML = '';
  //     return;
  //   }
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      //   console.log(response);
      return response.json();
      //   if (response.ok) {
      //     return response.json();
      //   } else {
      //     // console.log(`поймали ошибку в первом then`);
      //     return null;
      //   }
    })
    .then(country => {
      //   console.log(`это then: country`);
      //   console.log(country);
      return country;
    });
  // .catch(er => {
  //   console.log(er);
  // });
}
////
// export default function fetchCountries(searchQuery) {
//   return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery.trim()}`)
//     .then(response => {
//       return response.json();
//     })
//     .catch(console.log(err));
// }
