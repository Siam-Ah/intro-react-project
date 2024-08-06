import React from "react"
import reactImage from "../images/logo192.png"

// Component that displays the navigation bar with React logo and course information
export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={reactImage} className="reactImg"/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}
