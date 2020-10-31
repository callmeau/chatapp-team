import MessageBox from "./MessageBox";
import MenuBar from "./MenuBar";
import ContactBar from "./ContactBar"
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import HeaderBar from "./MessageBox/HeaderBar";

function App() {
    const dataSource = [
        {
            "id": "123456",
            "name": "Tom",
            "age": 20,
            "nationality":"Mexico",
            "time": new Date(),
            "content": "Hi, How are you?",
            "unread": 3,
            "interests": ["Sports", "Music", "Movie"]
        },
        {
            "id": "654321",
            "name": "Amy",
            "age": 20,
            "nationality":"USA",
            "time": new Date(),
            "content": "Bye.",
            "unread": 2,
            "interests": ["Sports", "Music", "Movie"]
        },
        {
            "id": "888888",
            "name": "Mike",
            "age": 20,
            "nationality":"China",
            "time": new Date(),
            "content": "Hey!",
            "unread": 0,
            "interests": ["Sports", "Music", "Movie"]
        }
    ]

    return (
        <div className='container'>
            <div className='page-menu-bar'>
                <MenuBar userName="Jack" dataSource={dataSource}/>
            </div>
            <div className='page-contact-bar'>
                <ContactBar dataSource={dataSource}/>
            </div>
            <div className='page-header-bar'>
                <HeaderBar/>
            </div>
            <div className='page-message-box'>
                <MessageBox data={dataSource}/>
            </div>
        </div>
    );
}

export default App;
