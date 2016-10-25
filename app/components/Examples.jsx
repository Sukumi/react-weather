
var React = require('react');
var {Link} = require('react-router');

/*
 Examples

 Is a react STATELESS FUNCTIONAL COMPONENT

 (1) They only need to render something
 (2) They do not maintain any state

 Here: the React.createClass and render method need no longer to be used
 */
var Examples = props => {
    return(
        <div>
            <h1 className="text-center react-app-page-title">Examples</h1>
            <p>Here are few example location to try out.</p>
            <ol>
                <li><Link to="/?location='Hamburg'">Hamburg, Germany</Link></li>
                <li><Link to="/?location='Berlin'">Berlin, Germany</Link></li>
                <li><Link to="/?location='New York'">New York, NY US.</Link></li>
                <li><Link to="/?location='Rome'">Rome, Italy</Link></li>
                <li><Link to="/?location='Paris'">Paris, France</Link></li>
                <li><Link to="/?location='London'">London, UK</Link></li>
                <li><Link to="/?location='Rio'">Rio, Brazil</Link></li>
            </ol>
        </div>
    );
}

module.exports = Examples;