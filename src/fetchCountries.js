export default function fetchCountries(searchQuery) {
  //   if (!searchQuery.trim()) return;
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      //   console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        // console.log(`поймали ошибку в первом then`);
        return null;
      }
    })
    .then(country => {
      //   console.log(`это then: country`);
      //   console.log(country);
      return country;
    });
}
