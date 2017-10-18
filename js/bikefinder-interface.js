let apiKey = require('./../.env').apiKey;

// $(document).ready(function() {
//   $('#bikeLocation').click(function() {
//     let city = $('#location').val();
//     $('#location').val("");
//     $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`).then(function(response) {
//       $('.showManufacturer').text(`The Manufacturer in ${city} is ${response.bikes[0].manufacturer_name}`);
//       debugger;
//       $('.showModel').text(`The model is ${response.bikes.title}.`);
//     }).fail(function(error) {
//          $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//     });
//   });
// });


$(document).ready(function() {
  $('#search').click(function() {

    let city = $('#location').val();
    console.log(city);
    $('#location').val("");
    console.log(city);
    $.get(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${city}&distance=10&stolenness=proximity`).then(function(response) {
      response.bikes.forEach(function(bike){
        $('#manufacturer').append("<li>" + `${bike.manufacturer_name}` + "</li>");
        $('#frame').append("<li>" + `${bike.frame_model}` + "</li>");
        $('#year').append("<li>" + `${bike.year}.` + "</li>");
        $('#color').append("<li>" + `${bike.frame_colors[0]}.` + "</li>");
      })
    }).fail(function(error) {
         $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
