var apiKey = require('./../.env').apiKey;
var mapsapi = require('google-maps-api')(apiKey);

function Map() {}

Map.prototype.getMap = function (city) {
  var map;

  function getLocation(city) {
    var result;
    if (city == 'portland') {
      result = {center: {lat: 45.512794, lng: -122.679565},
      zoom: 15,
      mapTypeId: 'terrain'};
    } else if (city == 'seattle') {
      result = {center: {lat: 47.6062, lng: -122.3321},
      zoom: 15};
    } else {
      result = {center: {lat: 44.0521, lng: -123.0868},
      zoom: 15};
    };
    return result;
  }
  mapsapi().then( function( maps ) {
    map = new google.maps.Map(document.getElementById('map'), getLocation(city));
  });

  // $.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyBbUXYwk2ys8AbO1HdYy9CSo9Gqzc3Gqyc&callback=initMap').then(function() {
  //   function initMap(city) {
  //     map = new google.maps.Map(document.getElementById('map'), {
  //       if (city === 'portland') {
  //         center: {lat: 45.512794, lng: -122.679565},
  //         zoom: 15
  //         mapTypeId: 'terrain'
  //       } else if (city === 'seattle') {
  //         center: {lat: 47.6062, lng: -122.3321},
  //         zoom: 15
  //       } else {
  //         center: {lat: 44.0521, lng: -123.0868},
  //         zoom: 15
  //       };
  //     });
  //   };
  // });
};

exports.mapModule = Map;
