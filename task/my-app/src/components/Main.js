import React from 'react';
import ReactDOM from 'react-dom';
import './Main.css'
import bgreact from "../images/grey-react-logo.png"

export default function Main(){
    return(
        <>
        <main className="main">
            <h1 className="heading">Fun facts about React</h1>
            <ul className='facts'>
                <li className='list'>Was first released in 2013</li>
                <li className='list'>Was originally created by Jordan Walke</li>
                <li className='list'>Has well over 100K stars on GitHub</li>
                <li className='list'>Is maintained by Facebook</li>
                <li className='list'>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
        </>
    )
}