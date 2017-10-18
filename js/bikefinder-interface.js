let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    // let city = $('#location').val();
    // $('#location').val("");
    $.get(`bikeindex.org/api/v3/search?APPID=${apiKey}`).then(function(response) {
      debugger;
        $('.showBikeList').text(`${response.}`)
        // $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        // $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
      }).fail(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
