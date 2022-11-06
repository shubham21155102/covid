//jshint esversion:6
const express = require("express");
const app = express();
const axios = require("axios");
const datasl = [];
// const a = require("./country_wise");
console.log(a + "=")
    // var continent=document.getElementById(`{continent}`);
var continent = "Asia";

// var continent=document.getElementById("Asia").innerHTML.toLowerCase();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/asia", function(req, res) {
    res.render("asia", {
        datas: datasl
    });
    //   res.write("hii");
    //   res.send();
});
const options = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${continent}`,
    headers: {
        'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

axios.request(options).then(function(response) {

    // console.log(response.data);
    //   console.log(response.data.length);
    for (let index = 0; index < response.data.length; index++) {
        const datu = {
                symbol: response.data[index].ThreeLetterSymbol,
                country: response.data[index].Country,
                continent: response.data[index].Continent,
                Rank: response.data[index].rank,
                TotalRecovered: response.data[index].TotalRecovered,
                NewRecovered: response.data[index].NewRecovered,
                TotalCases: response.data[index].TotalCases,
                NewCase: response.data[index].NewCases,
                TotalDeaths: response.data[index].TotalDeaths,
                NewDeaths: response.data[index].NewDeaths,
                ActiveCases: response.data[index].ActiveCases,
                TotalTests: response.data[index].TotalTests,
                Population: response.data[index].Population
            }
            // const element = array[index];
            //       console.log(response.data[index].id);
            //       console.log(response.data[index].Country);
            //       console.log(response.data[index].Continent);
            //       console.log(response.data[index].rank);
            //       console.log(response.data[index].TotalCases);
            //       console.log(response.data[index].NewCases);
            //       console.log(response.data[index].TotalDeaths);
            //       console.log(response.data[index].NewDeaths);
        datasl.push(datu);
    }



}).catch(function(error) {
    console.error(error);
});
// console.log(datasll);
// export default datasl;
// app.listen(4000)
// export default datasl;
const EventEmitter = require('node:events')
module.exports = new EventEmitter();

// Do some work, and after some time emit
// the 'ready' event from the module itself.
setTimeout(() => {
    // module.exports.emit(datasl);
    module.exports.emit('ready');
}, 1000);

console.log(a);