const forcast = require("../control/forcast")
const geocode = require("../control/geocode")
const country = process.argv[2]

//===========geocode function=============

 geocode(country, (error, data) => {
    console.log("ERROR: ", error)// to print in real web use instead of console, innerHTML..
    console.log("DATA: ", data)

    //==========forcast function=============
forcast(data.latitude, data.longtitude, (error,data) => {
    console.log("ERROR: ", error)
    console.log("DATA: ", data)// to print in html page, remove consolse and use innerHTML..
})//forcast
 })//geocode




