import React from 'react';
import '../App.css';

export default class Splash extends React.Component {
    render() {
        return (
            <div className='splash'>
                <button className='clientbutton' onClick={clientButtonClick}>Client Login</button>
                <button className='adminbutton' onClick={adminButtonClick}>Admin Login</button>
            </div>
        );
    }
}

function clientButtonClick() {
    console.log('Client Login clicked');
}

function adminButtonClick() {
    console.log('Admin Login clicked');
}