export class BikeFinder {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.basePath = 'https://bikeindex.org/api/v3';

  }
// response.bikes may not work without calling getJSON
  search(city, result) {
    $.get(`${this.basePath}/search?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`)
    .then(function(response) {
      result(response.bikes);
    })
    .fail(function(error) {
      throw(error.responseText);
    });
  }



}
