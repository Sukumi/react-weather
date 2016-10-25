
//var React = require('react');
//var Nav = require('Nav');

import React from 'react';
import Nav from 'Nav'; //without alias in webpack.config.js => import Nav from './Nav';


/*
 Main parent container component (container)

 The container manages state and acts on state changes to
 update the child components (re-render) if necessary.

 As a Main component it is responsible to render individual "Pages" in a SPA (Single-Page-APP)

 Base Component Layout:

 Main +++++++++++++++++++++
 +
 + Navigation +++++++++++
 + +
 + ++++++++++++++++++++++
 +
 + Page +++++++++++++++++
 + +
 + +
 + ++++++++++++++++++++++
 +
 ++++++++++++++++++++++++++

 Is a react STATELESS FUNCTIONAL COMPONENT

 (1) They only need to render something
 (2) They do not maintain any state

 Here: the React.createClass and render method need no longer to be used

 Styling:
 We use the Foundation CSS library for styling here.
 More specific we are using:
    a. Grid http://foundation.zurb.com/sites/docs/grid.html

 To ensure here that each page (this.props.children) will be effected by our style defined here in the parent.

 */

const Main = (props) => (
    <div>
        <Nav/>,
        <div className="row">
            <div className="columns medium-6 large-4 small-centerd">
                {props.children}
            </div>
        </div>
    </div>
);

export default Main;
