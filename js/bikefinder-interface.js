import { BikeFinder } from './../js/bikefinder.js';
let apiKey = require('./../.env').apiKey;
google.charts.load("current", {packages:["corechart"]});

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

    // google bike color chart
    finder.generateData(bike) {

      let data = google.visualization.arrayToDataTable([
        ['Bike Color', '# of Bikes'],
        ['Black', bike.black_bikes],
        ['Red', bike.red_bikes],
        ['Yellow or Gold', bike.yellow_bikes],
        ['Blue', bike.blue_bikes],
        ['Green', bike.green_bikes],
        ['Silver or Gray', bike.silver_bikes],
        ['Orange', bike.orange_bikes],
        ['White', bike.white_bikes],
        ['Other', bike.other_bikes]
      ]);

      let options = {
        // height: 400,
        // width: 500,
        title: 'Stolen bikes by color',
        pieHole: 0.4,
        colors:['#010102', '#E50000', '#FFFF32', '#3838CC', '#328432', '#666666', '#FFAE19', '#E5E5E5', '#4C004C']
      };

      let chart = new google.visualization.PieChart(document.getElementById('colorDonut')); 			chart.draw(data, options);

      drawChart(data, options);
    };
  });
});
