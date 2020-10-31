import React, { Component } from 'react';
import { ChatList } from 'react-chat-elements'
import Contact from '../Contact'
import {InputItem} from 'react-sidebar-ui'
import { RiSearchLine } from "react-icons/ri"
import 'react-chat-elements/dist/main.css';
import './ContactBar.css';

export default class ContactBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data
        }
    }
    onClick(item, i, e) {
        if (this.props.onClick instanceof Function)
            this.props.onClick(item, i, e);
    }
    render() {
        return (
            <div
                ref={this.props.cmpRef}
                className="contact-bar">
                <div className="search-bar">
                    <div className="search-icon">
                        <RiSearchLine size="30px"/>
                    </div>
                    <InputItem type='text' placeholder={'Search...'} classes="search-bar-text"/>
                </div>
                <div className="contact-list">
                {
                    this.props.dataSource.map((x, i) => (
                        <Contact
                            key={i}
                            {...x}
                            onClick={(e) => this.onClick(x, i, e)}/>
                    ))
                }
                </div>
            </div>
        );
    }
}
