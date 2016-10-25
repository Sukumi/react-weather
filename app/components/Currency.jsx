import React from 'react';

import {getExchangeRate} from 'fixerIo';
import CurrencyManager from 'currencyManager';
import CurrencyForm from 'CurrencyForm';
import CurrencyMessage from 'CurrencyMessage';
import ErrorModal from 'ErrorModal';


export default class Currency extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fromCurrency: CurrencyManager.currencyMap['EUR'],
            toCurrency: CurrencyManager.currencyMap['USD'],

            isLoading: false,
            errorMessage: undefined
        };

        //bind "this", necessary for ES6 and for own method in derived component class
        this.handleConversion = this.handleConversion.bind(this);

        this.handleBaseCurrencySelection = this.handleBaseCurrencySelection.bind(this);
        this.handleTargetCurrencySelection = this.handleTargetCurrencySelection.bind(this);
    }

    handleBaseCurrencySelection(e){
        console.log("handleBaseCurrencySelection: ", e.target.value);
        let currency = CurrencyManager.currencyMap[e.target.value];
        currency.value = undefined;
        this.setState({fromCurrency: currency});
    }

    handleTargetCurrencySelection(e){
        console.log("handleTargetCurrencySelection: ", e.target.value);
        let currency = CurrencyManager.currencyMap[e.target.value];
        currency.value = undefined;
        this.setState({toCurrency: currency});
    }

    handleConversion(amount){
        //here the new city
        let newAmount = amount;
        let {isLoading, fromCurrency, toCurrency, errorMessage} = this.state;
        console.log("handleConversion: ", amount);
        fromCurrency.value = Number(amount);
        toCurrency.value = undefined;

        //set breakpoint with: debugger;
        //debugger;

        // activate the loading indicator state and clear out all other variables
        this.setState(
            {
                isLoading:true,
                errorMessage: undefined
            }
        );

        getExchangeRate(fromCurrency.code, toCurrency.code).then(
            function(rate){
                console.log('fixerIo.getExchangeRate:resolve => ', rate);
                toCurrency.value = Math.round((fromCurrency.value * Number(rate)) * 10000)/10000;
                this.setState({isLoading:false, toCurrency: toCurrency});
            }.bind(this),
            function(e){
                console.log('fixerIo.getExchangeRate:reject');

                this.setState(
                    {
                        isLoading:false,
                        errorMessage: e.message
                    }
                );

            }.bind(this));
    }

    render(){
        let {isLoading, fromCurrency, toCurrency, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching currency...</h3>
            }else if(typeof errorMessage ==='undefined' && typeof toCurrency.value === 'number'){
                console.log(`From:${fromCurrency.value} To:${toCurrency.value}`)
                return <CurrencyMessage symbol={toCurrency.symbol} amount={toCurrency.value}/>
            }
            //console.log(`From:${fromCurrency.value} To:${toCurrency.value} ${typeof toCurrency.value}`)
        }

        function renderError() {
            if(typeof errorMessage ==='string'){
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div style={{display: 'auto', margin: 'auto'}}>
                <h1 className="text-center react-app-page-title">Currency Converter</h1>
                <CurrencyForm onConvert={this.handleConversion} onBaseCurrencySelect={this.handleBaseCurrencySelection} onTargetCurrencySelect={this.handleTargetCurrencySelection}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}