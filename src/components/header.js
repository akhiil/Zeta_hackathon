import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'

const App = () => {
    return (
        <div className="container">
            <div className="innerContainer">
                <span>
                    <p style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Budget Helper</p>
                </span>
                <span>
                    <Link className="eachLink" to="/">Home</Link>
                    <Link className="eachLink" to="/results">Result</Link>
                    <Link className="eachLink" to="/login">Login</Link>
                    <Link className="eachLink" to="/signup">Signup</Link>
                </span>
            </div>
        </div>
    )
}

export default App;