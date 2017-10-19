export class BikeFinder {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.basePath = 'https://bikeindex.org/api/v3';
    this.black_bikes = 0;
    this.red_bikes = 0;
    this.yellow_bikes = 0;
    this.blue_bikes = 0;
    this.green_bikes = 0;
    this.silver_bikes = 0;
    this.orange_bikes = 0;
    this.white_bikes = 0;
    this.other_bikes = 0;
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

  generateData(result) {
    $.get(`${this.basePath}/search?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`)
    .then(function(bike) {
      result(response.bikes.forEach(bike) {
        let bikeColor = bike.frame_colors[0];
        switch(bike_color) {
          case "Black":
            this.black_bikes += 1;
            break;
          case "Red":
            this.red_bikes += 1;
            break;
          case "Yellow or Gold":
            this.yellow_bikes += 1;
            break;
          case "Blue":
            this.blue_bikes += 1;
            break;
          case "Green":
            this.green_bikes += 1;
            break;
          case "Silver or Gray":
            this.silver_bikes += 1;
            break;
          case "Orange":
            this.orange_bikes += 1;
            break;
          case "White":
            this.white_bikes += 1;
            break;
          default:
            this.other_bikes += 1;
          }
      });
    })
    .fail(function(error) {
      throw(error.responseText);
    });
  }

}
