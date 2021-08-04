import React from 'react';
import { Link } from 'react-router-dom'
import '../css/header.css'
import Logo from './logo'

const App = () => {
    return (
        <div className="container">
            <div className="innerContainer">
                <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{ marginTop: 20, display: 'block' }}>
                        <Logo height={45} width={45} size={27} />
                    </div>
                    <p style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>Budget Helper</p>
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