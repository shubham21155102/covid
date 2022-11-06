const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {function: 'GLOBAL_QUOTE', symbol: 'FORD'},
  headers: {
    'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});