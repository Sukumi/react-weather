
import React from 'react';

/*
 WeatherForm child presentational component (view)

 Styling:
     We use the Foundation CSS library for styling here.
     More specific we are using:
        a. Button http://foundation.zurb.com/sites/docs/button.html


 */

/*
var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        //prevent browser refresh
        e.preventDefault();

        // Get submitted location from input field
        var newLocation = this.refs.location.value;

        if(newLocation.length > 0){
            //clear input field
            this.refs.location.value='';

            // call onSearch function prop
            this.props.onSearch(newLocation);
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="text" placeholder="Enter city name" ref="location"/></div>
                    <div><button>Get Weather</button></div>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;*/


/*ES6 style + React.Component */
export default class WeatherForm extends React.Component {
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
        let newLocation = this.refs.location.value;

        if(newLocation.length > 0){
            //clear input field
            this.refs.location.value='';

            // call onSearch function prop
            this.props.onSearch(newLocation);
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div><input type="search" placeholder="Enter city name" ref="location"/></div>
                    <div><button className="expanded hollow button">Get Weather</button></div>
                </form>
            </div>
        )
    }
}