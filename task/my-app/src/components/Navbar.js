import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'
import reactLogo from "../images/react-logo.png";


export default function Navbar(){
    return(
        <>
        <nav className="nav">
            
            <img src={reactLogo} alt='react-logo'/>
            <h2>ReactFacts</h2>
            
            <h3>React Course - Project 1</h3>
        </nav>
        </>
    )
}