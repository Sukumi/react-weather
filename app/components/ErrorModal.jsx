
import React from 'react';


// +++ START: React mutating DOM Error: issued by CSS Foundation which manipulates the dom
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
// +++ END: React mutating DOM Error: issued by CSS Foundation which manipulates the dom

/*
    Modal Error Dialog component

    Styling:
    We use the Foundation CSS library for styling here.
    More specific we are using:
        a. Reveal http://foundation.zurb.com/sites/docs/reveal.html
 */
class ErrorModal extends React.Component {
    /*
        The constructor for a React component is called before it is mounted.

        When implementing the constructor for a React.Component subclass,
        you should call super(props) before any other statement.
        Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

        The constructor is the right place to initialize state.
        If you don't initialize state and you don't bind methods, you don't need to implement
        a constructor for your React component.

        It's okay to initialize state based on props if you know what you're doing.
        Here's an example of a valid React.Component subclass constructor:
     */
    constructor(props) {
        super(props);

        /*
            Beware of this pattern, as it effectively "forks" the props and can lead to bugs.
            Instead of syncing props to state, you often want to lift the state up.

            If you "fork" props by using them for state, you might also want to implement
            componentWillReceiveProps(nextProps) to keep the state up-to-date with them.
            But lifting state up is often easier and less bug-prone.

         */
        // this.state = {
        //     color: props.initialColor
        // };
    }

    /*
        componentWillMount() is invoked immediately before mounting occurs.
        It is called before render(), therefore setting state in this method
        will not trigger a re-rendering.
        Avoid introducing any side-effects or subscriptions in this method.

        This is the only lifecycle hook called on server rendering.
        Generally, we recommend using the constructor() instead.

     */
    componentWillMount(){

    }

    /*
        componentDidMount() is invoked immediately after a component is mounted.
        Initialization that requires DOM nodes should go here.
        If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
        Setting state in this method will trigger a re-rendering.
     */
    componentDidMount(){

        // +++ START: React mutating DOM Error: issued by CSS Foundation which manipulates the dom
        //####### moved from render()
        let {title, message} = this.props;


        // because Foundation is mutating the DOM which interfers with react because it expect
        // to be in charge of changing the markup during their lifecycle process
        // in render its throwing:
        //          invariant.js:39 Uncaught (in promise) Error: processUpdates():
        //          Unable to find child 2 of element. This probably means the DOM was unexpectedly mutated
        var modalMarkup = (
            <div id="react-app-error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
        //####### END: moved from render()

        // create a jquery variable with the modalMarkup to create a new dom element with jquery:
        // (1) We are using ReactDOMServer to render our markup to a string.
        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        // (2) Assign this component to jquery and add our markup to the .html() method.
        //     This effectively creates the new markup inside our component.
        $(ReactDOM.findDOMNode(this)).html($modal);

        // +++ END: React mutating DOM Error: issued by CSS Foundation which manipulates the dom


        let modal = new Foundation.Reveal($('#react-app-error-modal'));

        //Foundations' .open() makes here changes to the dom which interferes with react, so the workaround above
        //have been applied.
        modal.open();
    }

    // https://facebook.github.io/react/docs/react-component.html#render
    render(){
        let {title, message} = this.props;
        return (
            <div>
            </div>
        );
    }
}

ErrorModal.propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
    title: 'General Error'
};

export default ErrorModal;