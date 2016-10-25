
import React from 'react';

import CurrencyManager from 'currencyManager';

export default class CurrencySelectionList extends React.Component {
    constructor(props) {
        super(props);

        this.onDropdownSelected = this.onDropdownSelected.bind(this);
        this.createSelectItems = this.createSelectItems.bind(this);
    }

    onDropdownSelected(e) {
        console.log("THE VAL", e.target.value);
        //here you will see the current selected value of the select input
    }

    createSelectItems() {
        let items = [];
        let currencies = CurrencyManager.currencyMap;
        for (let key in currencies) {
            let curr = currencies[key];

            items.push(<option key={key} value={key}><img src={"img/flags/ad.png"}/>{curr.name}</option>);
        }
        return items;
    }

    render(){
        let {title, message} = this.props;
        return (
            <select onChange={this.props.onSelect} label="Currency Selection" /*ref="selectedCurrency"*/ defaultValue={this.props.default}>
                {this.createSelectItems()}
            </select>
        );
    }
}