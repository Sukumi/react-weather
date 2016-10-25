
//Import react and react-dom
//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';


//Import react-router components: Route, Router, IndexRoute, hashHistory

/*
 USe of the ES6 Destructuring Syntax

    var {Route, Router, IndexRoute, hashHistory} = require('react-router');
    Same as:

    var Route = require('react-router').Route;
    var Router = require('react-router').Router;
    var IndexRoute = require('react-router').IndexRoute;
    var hashHistory = require('react-router').hashHistory;

    other example:

         var obj1 = {
         name: 'Stephan',
         age: 24,
         location: 'Georgia'
         };

         var {name} = obj1;
         var {age, location} = obj1;

    The {name} instructs js to pull everything out of obj1 which belongs to
    obj.name property and store in a variable 'name'.
    The {age, location} instructs js to pull everything out of
    obj1 which belongs to obj1.age and obj1.location property
    and store in a variable with the same name as the obj1 property.

    => THIS is called: DESTRUCTURING in ES6
 */
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Our Main component with an alias (created in webpack.config.js)

// CommonJS
// var Main = require('Main');
// var Weather = require('Weather');
// var About = require('About');
// var Examples = require('Examples');

//require('style!css!foundation-sites/dist/foundation.min.css');

// ES6 Modules: import
import Main from 'Main';
import Weather from 'Weather';
import Currency from 'Currency';
import About from 'About';
import Examples from 'Examples';

// Load & Init CSS Foundation
import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// Load CSS custom react app style (by webpack alias for ./app/sytles/app.css)
// import 'style!css!CustomReactAppCSS';

// Load SASS custom react app style (by webpack alias for ./app/sytles/app.scss)
import 'style!css!sass!CustomReactAppSASS';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="currency" component={Currency}/>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
