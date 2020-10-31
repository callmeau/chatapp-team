import React, { Component } from 'react';
import './MenuBar.css';
import 'react-sidebar-ui/dist/index.css'
import { Popup, Rating, Button, Header, Modal } from 'semantic-ui-react'
import {IoIosChatbubbles, IoMdPeople} from "react-icons/io"
import { RiLogoutBoxLine } from "react-icons/ri"
import {Link} from 'react-router-dom'
import {Sidebar, Item, LogoText} from 'react-sidebar-ui'
import Avatar from 'react-avatar'
import JoinGroupModal from '../JoinGroupModal'
import CreateGroupModal from '../CreateGroupModal'

export default class MenuBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName : this.props.userName,
            open: false
        }
        this.setOpen = this.setOpen.bind(this);
    }

    setOpen(isopen) {
        this.setState({
            open: isopen
        })
    }
    render() {
        const state = this.state
        return (
            <div>
            <Sidebar bgColor='black' isCollapsed={false}>
            <div id='avatar'>
                <Avatar color={Avatar.getRandomColor(['red', 'green', 'blue'])} name={state.userName} round="20px" />
            </div>
              
              <LogoText>{state.userName}</LogoText>
       
            <div id='contact'>
                    <Item bgColor='black'>
                        <div className='menu-bar-icon'>
                            <IoMdPeople/>
                        </div>
                        <div className='menu-bar-text'>
                        Contact
                        </div>
                    </Item>
            </div>

            <div id='group-chat'>
              <Item bgColor='black'>
                <div className='menu-bar-icon'>
                    <IoIosChatbubbles/>
                </div>
                <div className='menu-bar-text'>
                Group Chat
                </div>
              </Item>
            </div>

            <div id="join-group">
            <JoinGroupModal/>
            </div>

            <div id="create-group">
              <CreateGroupModal dataSource={this.props.dataSource}/>
            </div>
            
            <div id='log-out'>
              <Item bgColor='peach'>
                <div className='menu-bar-icon'>
                    <RiLogoutBoxLine/>
                </div>
                <div className='menu-bar-text'>
                Log Out
                </div>
              </Item>
            </div>
            </Sidebar>
          </div>
        )
    }
}