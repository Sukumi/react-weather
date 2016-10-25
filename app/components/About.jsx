
//var React = require('react');
import React from 'react';

/*
    About

    Is a react STATELESS FUNCTIONAL COMPONENT

    (1) They only need to render something
    (2) They do not maintain any state

    Here: the React.createClass and render method need no longer to be used
 */
// var About = React.createClass({
//     render: function(){
//         return (
//             <h2>About component</h2>
//         );
//     }
// });

const About = (props) => {
    return (
        <div>
            <h1 className="text-center react-app-page-title">About</h1>
            <p>This is a simple weather application build on React. I have been build that app
            when attending The Complete React Web App Developer Course.
            </p>
            <p>
                Here are some of the tools I have used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
                </li>
                <li>
                    <a href="https://openweathermap.org">Open Weather Map</a> - This is the JavaScript framework used to search for weather data.
                </li>
            </ul>
        </div>
    );
};

export default About;