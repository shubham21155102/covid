const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://flight-delay-prediction.p.rapidapi.com/travel/predictions/flight-delay',
  params: {
    departureTime: '<REQUIRED>',
    flightNumber: '<REQUIRED>',
    duration: '<REQUIRED>',
    arrivalDate: '<REQUIRED>',
    destinationLocationCode: '<REQUIRED>',
    carrierCode: '<REQUIRED>',
    arrivalTime: '<REQUIRED>',
    originLocationCode: '<REQUIRED>',
    aircraftCode: '<REQUIRED>',
    departureDate: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
    'X-RapidAPI-Host': 'flight-delay-prediction.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});