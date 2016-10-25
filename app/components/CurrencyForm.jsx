import React from 'react';

import CurrencySelectionList from 'CurrencySelectionList';

export default class CurrencyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };

        //bind this necessary for ES6 and for own method in derived component class
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onFormSubmit(e){
        //prevent browser refresh
        e.preventDefault();

        // Get submitted location from input field
        let amount = this.refs.amount.value;

        if(amount.length > 0){
            //clear input field
            this.refs.amount.value='';

            // call onSearch function prop
            this.props.onConvert(amount);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <CurrencySelectionList onSelect={this.props.onBaseCurrencySelect} default="EUR"/>
                    <CurrencySelectionList onSelect={this.props.onTargetCurrencySelect}  default="USD"/>
                    <div><input type="text" placeholder="Enter amount" ref="amount"/></div>
                    <div><button className="expanded hollow button">Convert</button></div>
                </form>
            </div>
        )
    }
}