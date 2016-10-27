
import React from 'react';
import {Link, IndexLink} from 'react-router';

/*
 Nav


 Styling:
     We use the Foundation CSS library for styling here.
     More specific we are using:
        a. Top Bar: http://foundation.zurb.com/sites/docs/top-bar.html
        b. Menu: http://foundation.zurb.com/sites/docs/menu.html

    Note: Instead of class attribute of the html tag, in react jsx the className attribute is used
 */

//CommonJS style
/*
var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        //debugger;
        alert('Not yet wired up');
    },
    render: function (){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search"/></li>
                            <li><button type="submit" className="button" value="">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
 */

/*
    React.createClass vs. React.Component
    https://toddmotto.com/react-create-class-versus-component/

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

/*ES6 style + React.createClass
const Nav = React.createClass({
     propTypes: {

    },
    onSearch(e){
        e.preventDefault();
        //debugger;
        alert('Not yet wired up');
    },
    render (){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Search"/></li>
                            <li><button type="submit" className="button" value="">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});
export default Nav;*/

//
/*ES6 style + React.Component */
export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        //bind "this", necessary for ES6 and for own method in derived component class
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(e){
        e.preventDefault();
        //debugger;

        // Get submitted location from input field
        let location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);

        if(encodedLocation.length > 0){
            //clear input field
            this.refs.search.value='';

            // switch page
            //Challenge:
            /*
                if the main page already rendered and you change the page
                the props should be updated, which is not done automatically,
                because props cannot be updated except when the parent props have been changed.

                So use componentWillReceiveProps() in the parent component to
                capture changes of parent props.

                React is updating the Weather.jsx component props when the URL changes.
             */
            window.location.hash = `#/?location=${encodedLocation}`;
        }

    }
    render (){
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/currency" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Currency Converter</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
                        </li>
                        <li>
                            <Link to="/chat" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Chat</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter city name" ref="search"/></li>
                            <li><button type="submit" className="button" value="">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
}
