var Map = require('./../js/apiapp.js').mapModule;

$(document).ready(function(){
  var currentCity = new Map();
  $('#button').click(function(e) {
    e.preventDefault();
    var city = $('#select').val();
    currentCity.getMap(city);
  });
});
