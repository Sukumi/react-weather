
// http://jamesknelson.com/six-essential-javascript-libraries/
// http://www.computersciencezone.org/50-most-useful-apis-for-developers/


// http://openweathermap.org/current

// https://www.npmjs.com/package/axios
// http://codeheaven.io/how-to-use-axios-as-your-http-client/
// Promise based HTTP client for the browser and node.js
var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';
const OPEN_WEATHER_MAP_APPID = '7c9ec9e1c3263e1dd7c6d6f13854bac7';

let axios_resonse_debug = response => {
    console.log(`response: ${response.status}: ${response.data}`);
    console.log(`headers: ${response.headers}`);
    console.log(`config: ${response.config}`);
}

module.exports = {
    getTemp : function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}?APPID=${OPEN_WEATHER_MAP_APPID}&q=${encodedLocation}&units=metric`;
        console.log('openWeatherMap request: ' + requestUrl);
        //set breakpoint with: debugger;
        //debugger;
        return axios.get(requestUrl).then(function(response){
            if(response.data.cod && response.data.message){
                axios_resonse_debug(response);
                throw new Error(response.data.message);
            }else{
                axios_resonse_debug(response);
                return response.data.main.temp;
            }
        }, function(reject){
            /*if(response.data && response.data.message){
                console.error(response.data.message);
                throw new Error(response.data.message);
            }*/
            if (reject instanceof Error) {
                console.error(`response instanceof Error: ${reject.number}:${reject.message}` );
                throw new Error(reject.message);
            }else{
                axios_resonse_debug(reject);
                throw new Error(reject.data.message);
            }
        });
    }
}