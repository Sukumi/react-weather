
import React from 'react';

/*
 ChatMessage child presentational component (view)

 Is a react STATELESS FUNCTIONAL COMPONENT

 (1) They only need to render something
 (2) They do not maintain any state

 Here: the React.createClass resp. React.Component and render method need no longer to be used
 */

const ChatMessage = (props) => {
    let {message} = props;

    return(
        <div>
            <h3 className="text-center">Message sent: {message}</h3>
        </div>
    )
};

export default ChatMessage;