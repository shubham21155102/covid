//jshint esversion:6
const express = require("express");
const app = express();
const axios = require("axios");
// var provinceData, a = require("./country_wise");
// console.log(a + "=")
var provinceData = require("./country_wise");
// console.log(a + "=")
// console.log(provinceData);
// var data = [{
//     values: [19, 26, 1000],
//     labels: ['Residential', 'Non-Residential', 'Utility'],
//     type: 'pie'
// }];

// var layout = {
//     height: 400,
//     width: 500
// };

// var x = Plotly.newPlot('myDiv', data, layout);


// ll.forEach((gg) => {
//         console.log(gg.province);
//     })
// console.log(ll);
// const a = require('./covid');
// import { b } from "./country_wise";
// import datas from "./covid";
// const covidJS=require("./covid");
// const datas=covidJS.datas;
datasworld = [];
datas = [];
continent = "asia";
var country = "IND";
countryData = [];
// console.log(datas);
// document.getElementById
// var continent="asia";
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.get("/asia", function(req, res) {
    res.render("asia", {
        datas: datas,
        continent: continent
    });
    //   res.write("hii");
    //   res.send();
});
app.get("/", function(req, res) {
    res.render("world", {
        datasworld: datasworld
            // x: x
    });

});

const options = {
    method: 'GET',
    url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/world',
    headers: {
        'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

axios.request(options).then(function(response) {
    // console.log(response.data);
    index = 0;
    // for (let index = 0; index < response.data.length; index++) {
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
    datasworld.push(datu);
    // }
    // console.log(datas);
}).catch(function(error) {
    console.error(error);
});
const options2 = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/${continent}`,
    headers: {
        'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

axios.request(options2).then(function(response) {

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
            //const element = array[index];
            //console.log(response.data[index].id);
            //console.log(response.data[index].Country);
            //console.log(response.data[index].Continent);
            //console.log(response.data[index].rank);
            //console.log(response.data[index].TotalCases);
            //console.log(response.data[index].NewCases);
            //console.log(response.data[index].TotalDeaths);
            //console.log(response.data[index].NewDeaths);
        datas.push(datu);
    }



}).catch(function(error) {
    console.error(error);
});
app.get("/country", function(req, res) {
    res.render("country", {
        countryData: countryData
    })
})
const options3 = {
    method: 'GET',
    url: `https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/api-covid-data/reports/${country}`,
    headers: {
        'X-RapidAPI-Key': '523a701df2mshe681f72d088f984p1cc269jsn956d2226e66b',
        'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
    }
};

axios.request(options3).then(function(response) {
    response.data.forEach((register) => {
        // province:register.province
        // console.log(register.province)
        // province:register.province,
        const data = {
            province: register.province,
            confirmed: register.confirmed,
            recovered: register.recovered,
            deaths: register.deaths,
            active: register.active
        }
        countryData.push(data);
    });
    // console.log(response.data);
    // console.log(countryData);
}).catch(function(error) {
    console.error(error);
});

// console.log(datasworld);

// a.on('ready', () => {
//     console.log('module "a" is ready');
//     // console.log(datasl);
// });
// // console.log(a.on.datasl);

console.log(datas)
app.listen(3000);