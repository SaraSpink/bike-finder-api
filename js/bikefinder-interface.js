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
    function drawChart() {

      let data = google.visualization.arrayToDataTable([
        ['Bike', 'Color'],
        ['Silver',   11 ],
        ['Red',     11],
        ['Blue',  2],
      ]);

      let options = {
        height: 400,
        width: 500,
        title: 'Stolen bikes by color',
        pieHole: 0.4,
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6']
      };

      let chart = new google.visualization.PieChart(document.getElementById('colorDonut')); 			chart.draw(data, options);
    }
    drawChart();
  });
});
