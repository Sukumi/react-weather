
import React from 'react';
import ChatMessage from 'ChatMessage';
import ErrorModal from 'ErrorModal';

import io from 'socket.io-client';




/*
 Chat parent container component (container)

 */

export default class Chat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'disconnected',
            message: undefined,
            errorMessage: undefined
        };

        //bind "this", necessary for ES6 and for own method in derived component class
        this.handleConnect = this.handleConnect.bind(this);
        this.handleDisconnect = this.handleDisconnect.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }
    componentWillMount(){
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.handleConnect);
        this.socket.on('disconnect', this.handleDisconnect);
    }

    handleConnect(){
        this.setState({status: 'connected'});
    }
    handleDisconnect(){
        this.setState({status: 'disconnected'});
    }

    handleMessage(message){

        this.setState(
            {
                message: undefined,
                errorMessage: undefined
            }
        );
    }
    render(){
        let {isLoading, message, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>
            }else if(message){
                return <ChatMessage message={messge}/>
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
                <h1 className="text-center react-app-page-title">Chat (Status: {this.state.status}</h1>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
}