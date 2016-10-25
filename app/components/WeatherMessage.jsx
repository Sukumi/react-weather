
import React from 'react';

/*
 WeatherMessage child presentational component (view)

 Is a react STATELESS FUNCTIONAL COMPONENT

 (1) They only need to render something
 (2) They do not maintain any state

 Here: the React.createClass resp. React.Component and render method need no longer to be used
 */

const WeatherMessage = (props) => {
    let {location, temperature} = props;

    return(
        <div>
            <h3 className="text-center">It's it {temperature} in {location}</h3>
        </div>
    )
};

export default WeatherMessage;