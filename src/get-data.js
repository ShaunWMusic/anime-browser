export default function (searchTerm) {
  return fetch(`http://cors-anywhere.herokuapp.com/humingbird.me/api/v1/search/anime?query=${searchTerm}`)
  .then((res) => res.json());
}
