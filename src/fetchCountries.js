export default function fetchCountries(searchQuery) {
  if (!searchQuery.trim()) return;
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      return country;
    });
}
