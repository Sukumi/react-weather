
import fixerIo from 'fixerIo';

const currencySymbolMapAll = {
    "ALL": "L"
    , "AFN": "؋"
    , "ARS": "$"
    , "AWG": "ƒ"
    , "AUD": "$"
    , "AZN": "₼"
    , "BSD": "$"
    , "BBD": "$"
    , "BYR": "p."
    , "BZD": "BZ$"
    , "BMD": "$"
    , "BOB": "Bs."
    , "BAM": "KM"
    , "BWP": "P"
    , "BGN": "лв"
    , "BRL": "R$"
    , "BND": "$"
    , "KHR": "៛"
    , "CAD": "$"
    , "KYD": "$"
    , "CLP": "$"
    , "CNY": "¥"
    , "COP": "$"
    , "CRC": "₡"
    , "HRK": "kn"
    , "CUP": "₱"
    , "CZK": "Kč"
    , "DKK": "kr"
    , "DOP": "RD$"
    , "XCD": "$"
    , "EGP": "£"
    , "SVC": "$"
    , "EEK": "kr"
    , "EUR": "€"
    , "FKP": "£"
    , "FJD": "$"
    , "GHC": "₵"
    , "GIP": "£"
    , "GTQ": "Q"
    , "GGP": "£"
    , "GYD": "$"
    , "HNL": "L"
    , "HKD": "$"
    , "HUF": "Ft"
    , "ISK": "kr"
    , "INR": "₹"
    , "IDR": "Rp"
    , "IRR": "﷼"
    , "IMP": "£"
    , "ILS": "₪"
    , "JMD": "J$"
    , "JPY": "¥"
    , "JEP": "£"
    , "KES": "KSh"
    , "KZT": "лв"
    , "KPW": "₩"
    , "KRW": "₩"
    , "KGS": "лв"
    , "LAK": "₭"
    , "LVL": "Ls"
    , "LBP": "£"
    , "LRD": "$"
    , "LTL": "Lt"
    , "MKD": "ден"
    , "MYR": "RM"
    , "MUR": "₨"
    , "MXN": "$"
    , "MNT": "₮"
    , "MZN": "MT"
    , "NAD": "$"
    , "NPR": "₨"
    , "ANG": "ƒ"
    , "NZD": "$"
    , "NIO": "C$"
    , "NGN": "₦"
    , "NOK": "kr"
    , "OMR": "﷼"
    , "PKR": "₨"
    , "PAB": "B/."
    , "PYG": "Gs"
    , "PEN": "S/."
    , "PHP": "₱"
    , "PLN": "zł"
    , "QAR": "﷼"
    , "RON": "lei"
    , "RUB": "₽"
    , "RMB": "￥"
    , "SHP": "£"
    , "SAR": "﷼"
    , "RSD": "Дин."
    , "SCR": "₨"
    , "SGD": "$"
    , "SBD": "$"
    , "SOS": "S"
    , "ZAR": "R"
    , "LKR": "₨"
    , "SEK": "kr"
    , "CHF": "CHF"
    , "SRD": "$"
    , "SYP": "£"
    , "TZS": "TSh"
    , "TWD": "NT$"
    , "THB": "฿"
    , "TTD": "TT$"
    , "TRY": "₺"
    , "TRL": "₤"
    , "TVD": "$"
    , "UGX": "USh"
    , "UAH": "₴"
    , "GBP": "£"
    , "USD": "$"
    , "UYU": "$U"
    , "UZS": "лв"
    , "VEF": "Bs"
    , "VND": "₫"
    , "YER": "﷼"
    , "ZWD": "Z$"
    , "GEL": "₾"
};

const currencyCodeCurrencyMap = {
    "AUD": {name: "Australian Dollar", code: "AUD", symbol: "$", country: ""}
    , "BGN": {name: "Bulgaria Lev", code: "BGN", symbol: "лв", country: ""}
    , "BRL": {name: "Brazil Real", code: "BRL", symbol: "R$", country: ""}
    , "CAD": {name: "Canada Dollar", code: "CAD", symbol: "", country: ""}
    , "CHF": {name: "Switzerland Franc", code: "CHF", symbol: "CHF", country: ""}
    , "CNY": {name: "China Yuan Renminbi", code: "CNY", symbol: "¥", country: ""}
    , "CZK": {name: "Czech Republic Koruna", code: "CZK", symbol: "Kč", country: ""}
    , "DKK": {name: "Denmark Krone", code: "DKK", symbol: "kr", country: ""}
    , "EUR": {name: "Euro Member Countries", code: "EUR", symbol: "€", country: ""}
    , "GGP": {name: "Guernsey Pound", code: "GGP", symbol: "£", country: ""}
    , "HKD": {name: "Hong Kong Dollar", code: "HKD", symbol: "$", country: ""}
    , "HRK": {name: "Croatia Kuna", code: "HRK", symbol: "kn", country: ""}
    , "HUF": {name: "Hungary Forint", code: "HUF", symbol: "Ft", country: ""}
    , "IDR": {name: "Indonesia Rupiah", code: "IDR", symbol: "Rp", country: ""}
    , "ILS": {name: "Israel Shekel", code: "ILS", symbol: "₪", country: ""}
    , "INR": {name: "Indian Rupee", code: "INR", symbol: "₹", country: ""}
    , "JPY": {name: "Japanese Yen", code: "JPY", symbol: "¥", country: ""}
    , "KRW": {name: "Korea (South) Won", code: "KRW", symbol: "₩", country: ""}
    , "MXN": {name: "Mexico Peso", code: "MXN", symbol: "$", country: ""}
    , "MYR": {name: "Malaysian Ringgit", code: "MYR", symbol: "RM", country: ""}
    , "NOK": {name: "Norway Krone", code: "NOK", symbol: "kr", country: ""}
    , "NZD": {name: "New Zealand Dollar", code: "NZD", symbol: "$", country: ""}
    , "PHP": {name: "Philippines Peso", code: "PHP", symbol: "₱", country: ""}
    , "PLN": {name: "Poland Zloty", code: "PLN", symbol: "zł", country: ""}
    , "RON": {name: "Romania New Leu", code: "RON", symbol: "lei", country: ""}
    , "RUB": {name: "Russia Ruble", code: "RUB", symbol: "₽", country: ""}
    , "SEK": {name: "Sweden Krona", code: "SEK", symbol: "kr", country: ""}
    , "SGD": {name: "Singapore Dollar", code: "SGD", symbol: "$", country: ""}
    , "THB": {name: "Thailand Baht", code: "THB", symbol: "฿", country: ""}
    , "TRY": {name: "Turkey Lira", code: "TRY", symbol: "₺", country: ""}
    , "USD": {name: "United States Dollar", code: "USD", symbol: "$", country: ""}
    , "ZAR": {name: "South Africa Rand", code: "ZAR", symbol: "R", country: ""}
};

let buildCurrencyMap = () =>{
    let currencyMap = {};

    for (let key in currencyCodeCurrencyMap) {
        let currencyCode = key;
        let cur = currencyCodeCurrencyMap[currencyCode];
        currencyMap[currencyCode] = new currency(cur.code, cur.name, cur.symbol, cur.country);

    }

    return currencyMap;
};

export class currency{
    constructor(code, name, symbol, country){

        this._code = code;
        this._name = name;
        this._symbol = symbol;
        this._country = country;
        this._value = undefined;
    }

    get value(){return this._value;}
    get code(){return this._code;}
    get name(){return this._name;}
    get symbol(){return this._symbol;}
    get country(){return this._country;}

    set value(v){ this._value = v;}

}

export class CurrencyConversionResult{
    constructor(from, to, value, errMsg){
        this._from = from;
        this._to = to;
        this._value = value;
        this._errMsg = errMsg;
    }

    get value(){return this._value;}
    get from(){return this._value;}
    get to(){return this._code;}
    get errMsg(){return this._name;}
}

class currencyManager{
    constructor(){
        this._currencyMap = buildCurrencyMap();

        //bind "this", necessary for ES6 and for own method in derived component class
        this.convert = this.convert.bind(this);
    }

    convert(amount, from, to){

        fixerIo.getExchangeRate(from, to).then(
            function(rate){
                console.log('fixerIo.getExchangeRate:resolve');
                let fromCur = this._currencyMap[from];
                let toCur = this._currencyMap[to];

                return new CurrencyConversionResult(fromCur, toCur, amount * rate, undefined);
            }.bind(this),
            function(e){
                console.log('fixerIo.getExchangeRate:reject');

                let fromCur = this._currencyMap[from];
                let toCur = this._currencyMap[to];

                return new CurrencyConversionResult(fromCur, toCur, -1, e.message);

            }.bind(this));

    }

    get currencyMap(){return this._currencyMap;}
}

const CurrencyManager = new currencyManager();

export default CurrencyManager;