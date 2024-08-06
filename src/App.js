import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

// Main application component that renders Navbar and Main components
export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}
