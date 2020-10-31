import React, { Component } from 'react';
import './HeaderBar.css';
import {RiSearchLine} from "react-icons/ri";
import {InputItem} from "react-sidebar-ui";
import { BsPeople } from "react-icons/bs";


export default class HeaderBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="navbar">
                <div>
                    <span id="groupName">Group Name</span>
                    <BsPeople id="people"  size="20px"/>
                </div>
                {/*<button id="test3" onClick={() => alert('Hi!')}>GN</button>*/}
            </div>
        )
    };
}
