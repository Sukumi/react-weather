
//Import react and react-dom
//var React = require('react');
//var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';

// http://socket.io/docs/
// http://stackoverflow.com/questions/34480703/implementing-socket-io-with-reactjs-es6
// http://feathersjs.com/
// https://github.com/feathersjs/feathers-reactive/tree/master/examples/react-todos
// https://github.com/perminder-klair/feathersjs-react-js
// https://github.com/yycjs/feathers-react
// http://danialk.github.io/blog/2013/06/16/reactjs-and-socket-dot-io-chat-application/
// http://aviadas.com/blog/2015/09/06/building-realtime-apps-with-react/
// http://code.runnable.com/VOIYIALkqgAnHDmj/node-js-socket-io-and-react-js
import io from 'socket.io-client'

var socket = io(); // TIP: io() with no args does auto-discovery
socket.on('connect', function () { // TIP: you can avoid listening on `connect` and listen on events directly too!
    socket.emit('ferret', 'tobi', function (data) {
        console.log(data); // data will be 'woot'
    });
});


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
import Chat from 'Chat';

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
            <Route path="chat" component={Chat}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
