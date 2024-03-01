
//func to get location & condition of weather by longtitude & latitude

const request = require("request")

const forcast = (latitude, longtitude, callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=e642dcea3d8e459cbb124914242902&q=" + latitude + "," + longtitude
    
    request ({url, json : true} , (error, response) => {
    
        if(error){
            callback("faild to connect weather api service", undefined)
        }else if(response.body.error){
            callback(response.body.error.message, undefined)
            }else{
                callback(undefined, response.body.location.name + " is " + response.body.current.condition.text
                + " and temp is: " + response.body.current.temp_c
                + " NOTICE: last updata was at: "+ response.body.current.last_updated
                )
            }
        })
            }//callback function

module.exports = forcast

