const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
const countryData = [];
const axios = require("axios");
var country = "IND";
// app.get("/country", function(req, res) {
//     res.render("header", {
//         countryData: countryData
//     })
// })


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
        // console.log(register);

        // console.log(register.province);
        // console.log("confirmed cases:" + register.confirmed);
        // console.log("recovered:" + register.recovered);
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
// class WholeCountryData {
//     constructor(countryData) {
//         console.log("initialised");
//         this.province = province;
//         this.confirmed = confirmed;

//     };
//     province(country) {
//         return country.province;
//     }
//     confirmed(country) {
//         return country.confirmed;
//     }
//     recovered(country) {
//         return country.recovered;
//     }
//     deaths(country) {
//         return country.deaths;
//     }
//     active(country) {
//         return country.active;
//     }
//}
var a = 5;
// module.exports = a;
// console.log(countryData);
module.exports = countryData, a;