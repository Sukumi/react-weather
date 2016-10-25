
import React from 'react';
import WeatherMessage from 'WeatherMessage';
import WeatherForm from 'WeatherForm';
import ErrorModal from 'ErrorModal';
import openWeatherMap from 'openWeatherMap';



/*
 Weather parent container component (container)

 The container manages state and acts on state changes to
 update the child components (re-render) if necessary.
 */

/*
     React.createClass vs. React.Component
     https://toddmotto.com/react-create-class-versus-component/

     Two ways to do the same thing. Almost.
     React traditionally provided the React.createClass method to create component classes,
     and released a small syntax sugar update to allow for better use with ES6 modules by
     extends React.Component, which extends the Component class instead of calling createClass.

     These differences are subtle in places, but have quite a few interesting differences worth
     exploring, which will allow you to make the best decision for which is best for you.


     (1) propTypes & getDefaultProps
         React.createClass:
             In the React.createClass version,
             the propTypes property is an Object in which we can declare the type for each prop.
             The getDefaultProps property is a function that returns an Object to create initial props.

         React.Component:
             React.Component uses propTypes as a property on the actual Contacts class
             instead of a property as part of the createClass definition Object.
             I think it’s nicer syntax to create class properties so it’s much clearer
             what are React APIs versus your own on the definition Object.

             The getDefaultProps has now changed to just an Object property on the class called defaultProps,
             as it’s no longer a “get” function, it’s just an Object.
             I like this syntax as it avoids more React boilerplate, just plain JavaScript.

     (2) State management
        State is an interesting change, now we’re using constructors the implementation of initial states changes.

         React.createClass:
            We have a getInitialState function, which simply returns an Object of initial states.

         React.Component:
             The getInitialState function is deceased, and now we declare all state as
             a simple initialisation property in the constructor, which I think is much more JavaScript-like and
             less “API” driven.


     (3) “this” differences

         React.createClass:
             Using React.createClass will automatically bind this values correctly for us,
             but changes when using ES6 classes affect this.
             i.e this.handleClick

         React.Component:
             With ES6 classes this is slightly different, properties of the class
             do not automatically bind to the React class instance.

             There are a few ways we could bind the right context,
             here’s how we could bind inline:
                a. use of bind where needed:
                    i.e. this.handleClick.bind(this)
                b. use of bind within constructor
                    i.e this.handleClick = this.handleClick.bind(this);

     (4) Mixins
        React mixins are no longer supported when using React components written in ES6.

         React.createClass:
             With React.createClass we can add mixins to components using a mixins property
             which takes an Array of available mixins.
             These then extend the component class.

         React.Component:
            Mixins aren’t supported in ES6 classes.


     (5) Recommendations
        Facebook does suggest the future removal of React.createClass completely in favour of ES6 classes -
        see: https://facebook.github.io/react/blog/2015/03/10/react-v0.13.html
 */

/*
var Weather = React.createClass({
    getInitialState: function(){
        //state can be changed
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var that = this;
        //here the new city
        var newLocation = location;

        //set breakpoint with: debugger;
        //debugger;

        // activate the loading indicator state
        this.setState({isLoading:true});

        //Get weather data for new city
        openWeatherMap.getTemp(newLocation).then(
            function(temp){
                console.log('handleSearch:openWeatherMap.getTemp:resolve');
                that.setState({
                    isLoading:false,
                    location: newLocation,
                    temperature: temp
                });
            },
            function(errorMessage){
                console.log('handleSearch:openWeatherMap.getTemp:reject');
                // deactivate the loading indicator state
                that.setState({isLoading:false});
                //alert(errorMessage);
            });
        // .catch(function(errorMessage){
        //         console.log('handleSearch:openWeatherMap.getTemp:catch');
        //         // deactivate the loading indicator state
        //         that.setState({isLoading:false});
        //         //alert(errorMessage);
        //     });

    },
    render: function(){
        var {isLoading, location, temperature} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>
            }else if(location && temperature){
                return <WeatherMessage location={location} temperature={temperature}/>
            }
        }

        return (
            <div style={{display: 'auto', margin: 'auto'}}>
                <h2>Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;*/

/*ES6 style + React.Component */
export default class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            errorMessage: undefined
        };

        //bind "this", necessary for ES6 and for own method in derived component class
        this.handleSearch = this.handleSearch.bind(this);
    }

    /*
     componentDidMount() is invoked immediately after a component is mounted.
     Initialization that requires DOM nodes should go here.
     If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
     Setting state in this method will trigger a re-rendering.
     */
    componentDidMount(){
        //here we check the query string (given by react-router)
        // i.e. http://localhost:3000/#/?location='Paris' from the Examples page
        var location = this.props.location.query.location;

        // call the search method if we have a valid location string
        // test by entering: http://localhost:3000/#/?location='London'&_k=tq7k6b
        // into browser and refresh
        if(location && location.length > 0){
            this.handleSearch(location);

            //reset query string and remove the lcation parameter from the query string
            // to our application root: #/
            window.location.hash = '#/';
        }
    }
    /*
     Capture changes of props:

     componentWillReceiveProps() is invoked before a mounted component receives new props.
     If you need to update the state in response to prop changes (for example, to reset it),
     you may compare this.props and nextProps and perform state transitions using this.setState() in this method.

     Note that React may call this method even if the props have not changed,
     so make sure to compare the current and next values if you only want to handle changes.
     This may occur when the parent component causes your component to re-render.

     componentWillReceiveProps() is not invoked if you just call this.setState()


     !!!SO HERE:
     React is updating the Weather.jsx component props when the URL changes.

     */
    componentWillReceiveProps(newProps){
        //here we check the query string (given by react-router)
        // i.e. http://localhost:3000/#/?location='Paris' from the Examples page
        var location = newProps.location.query.location;

        // call the search method if we have a valid location string
        // test by entering: http://localhost:3000/#/?location='London'&_k=tq7k6b
        // into browser and refresh
        if(location && location.length > 0){
            this.handleSearch(location);

            //reset query string and remove the lcation parameter from the query string
            // to our application root: #/
            window.location.hash = '#/';
        }
    }

    handleSearch(location){
        //here the new city
        let newLocation = location;

        //set breakpoint with: debugger;
        //debugger;

        // activate the loading indicator state and clear out all other variables
        this.setState(
            {
                location: undefined,
                temperature: undefined,
                isLoading:true,
                errorMessage: undefined
            }
        );

        //Get weather data for new city
        openWeatherMap.getTemp(newLocation).then(
            function(temp){
                console.log('handleSearch:openWeatherMap.getTemp:resolve');
                this.setState({
                    isLoading:false,
                    location: newLocation,
                    temperature: temp
                });
            }.bind(this),
            function(e){
                console.log('handleSearch:openWeatherMap.getTemp:reject');
                // deactivate the loading indicator state
                this.setState(
                    {
                        isLoading:false,
                        errorMessage: e.message
                    }
                );
                //alert(errorMessage);
            }.bind(this));
    }
    render(){
        let {isLoading, location, temperature, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(location && temperature){
                return <WeatherMessage location={location} temperature={temperature}/>
            }
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
                <h1 className="text-center react-app-page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}