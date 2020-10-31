import React, { Component } from 'react';
import Avatar from 'react-avatar';
import {format} from 'timeago.js'
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import ProfileModal from "../ProfileModal"
import './Contact.css'

const colors = ['red', 'green', 'blue', 'pink', 'lightblue']

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){}

    render() {
        const color = colors[Math.floor(this.props.name[0] % colors.length)];
        return (
            <div>
            <ContextMenuTrigger id="same_unique_identifier">
            <div className='chat-item'>
                
                <ProfileModal data={this.props}/>
                <div className='chat-item-body' >
                    <div className="chat-item-body-top"> 
                        <div className="chat-item-body-name">
                            {this.props.name}
                        </div>
                        <div className="chat-item-body-time">
                            {
                                this.props.time &&
                                !isNaN(this.props.time) &&
                                (
                                    this.props.dateString ||
                                    format(this.props.time)
                                )
                            }
                        </div>
                    </div>
                    <div className="chat-item-body-bottom">
                    <div className="chat-item-body-bottom-content">
                        {this.props.content}
                    </div>
                    <div className="chat-item-bottom-status">
                        {
                            this.props.unread > 0 &&
                            <span>{this.props.unread}</span>
                        }
                    </div>
                    </div>
                </div>
                
            </div>
            </ContextMenuTrigger>
                <ContextMenu className="menu" id="same_unique_identifier" >
                    <MenuItem className="menuItem" data={{foo: 'bar'}} onClick={this.handleClick}>
                        Delete
                    </MenuItem>
                    <MenuItem divider/>
                    <MenuItem className="menuItem" data={{foo: 'bar'}} onClick={this.handleClick}>
                        Report
                    </MenuItem>
                </ContextMenu>
        </div>
        )
    }
}