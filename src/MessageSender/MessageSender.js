import React, { Component } from 'react';
import { Input, Button } from 'react-chat-elements'
import 'react-chat-elements/dist/main.css';
import './MessageSender.css'

export default class MessageSender extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="message-sender">
                <div>
                <Input
                    placeholder="What you wanna say......."
                    multiline={true}
                    rightButtons={
                        <Button
                            color='white'
                            backgroundColor='black'
                            text='Send'/>
                    }/>
                </div>
            </div>
        );
    }
}
