import { BikeFinder } from './../js/bikefinder.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#search').click(function() {

    let city = $('#location').val();

    $('#location').val("");

    let finder = new BikeFinder(apiKey);
    try {
      finder.search(city, function(bikes) {
        bikes.forEach(function(bike){
          // $('#manufacturer').append("<li>" + `${bike.thumb}` + "</li>");
          $('#manufacturer').append("<li>" + `${bike.manufacturer_name}` + "</li>");
          $('#frame').append("<li>" + `${bike.frame_model}` + "</li>");
          $('#year').append("<li>" + `${bike.year}.` + "</li>");
          $('#color').append("<li>" + `${bike.frame_colors[0]}.` + "</li>");

        });
      });
    } catch(err) {
     $('.showErrors').text(`There was an error processing your request: ${err}. Please try again.`);
    }
  });
});
