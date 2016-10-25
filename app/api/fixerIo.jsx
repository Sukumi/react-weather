
import axios from 'axios';

//Module private const
const FIXER_IO_URL = 'http://api.fixer.io/latest';

let axios_response_debug = response => {
    console.log(`response: ${response.status}: ${response.data}`);
    console.log(`headers: ${response.headers}`);
    console.log(`config: ${response.config}`);
}

export function getExchangeRate(from, to){
    var encodedFromCurrency = encodeURIComponent(from);
    var encodedToCurrency = encodeURIComponent(to);
    var requestUrl = `${FIXER_IO_URL}?base=${encodedFromCurrency}&symbols=${encodedToCurrency}`;

    console.log('fixer.io request: ' + requestUrl);
    //set breakpoint with: debugger;
    //debugger;
    return axios.get(requestUrl).then(function(response){
        if(response.data.cod && response.data.message){
            axios_response_debug(response);
            throw new Error(response.data.message);
        }else{
            axios_response_debug(response);
            return response.data.rates[to];
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
            axios_response_debug(reject);
            throw new Error(reject.data.message);
        }
    });
}