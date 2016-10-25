
export const currencySymbolMap = {
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
    , "KZT": "₸"
};

export const symbolCurrencyMap = {};
for (let key in currencySymbolMap) {
    if (currencySymbolMap.hasOwnProperty(key)) {
        let currency = key;
        let symbol = currencySymbolMap[currency];
        symbolCurrencyMap[symbol] = currency;
    }
}

export function getSymbolFromCurrency(currencyCode) {
    if (currencySymbolMap.hasOwnProperty(currencyCode)) {
        return currencySymbolMap[currencyCode];
    } else {
        return undefined;
    }
}

export function getCurrencyFromSymbol(symbol) {
    if (symbolCurrencyMap.hasOwnProperty(symbol)) {
        return symbolCurrencyMap[symbol];
    } else {
        return undefined;
    }
}



