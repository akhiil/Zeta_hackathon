import React, { useState, useEffect } from 'react';
import AfterHeader from '../components/screenHeader'

import '../css/homescreen.css'


const App = (props) => {
    const [expense, setExpense] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [interestValue, setInterestValue] = useState('');



    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log("button pressed");
    }

    return (
        <div>

            <AfterHeader name="Signup page" />
            <div className="homeContainer">
                <form className="formContainer" onSubmit={onSubmitHandler}>

                    <label style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10, marginRight: 20 }}>
                            Full name:-</h2>
                        <input
                            style={{ width: '70%' }}
                            placeholder="Enter your name"
                            className="inputStyle"
                            type="text" value={ageValue} onChange={(e) => setAgeValue(e.target.value)} />

                    </label>

                    <label style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10, marginRight: 20 }}>
                            Email:-</h2>
                        <input
                            style={{ width: '70%' }}
                            placeholder="Enter your email"
                            className="inputStyle"
                            type="text" value={ageValue} onChange={(e) => setAgeValue(e.target.value)} />

                    </label>
                    <label style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10, marginRight: 20 }}>
                            password:-</h2>
                        <input
                            style={{ width: '70%' }}
                            placeholder="Enter your password"
                            className="inputStyle" type="text" value={expense} onChange={(e) => setExpense(e.target.value)} />

                    </label>



                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
                        <button
                            className="buttonStyle">Login</button>
                    </div>

                    {/* <input className="buttonStyle" type="submit" value="Submit" /> */}
                    <div onClick={() => props.history.push('/login')} style={{ textAlign: 'center' }}>
                        <p style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                            already have an account? login</p>
                    </div>

                </form>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                    className="buttonStyle">signup with google</button>
            </div>
        </div>
    )
}

export default App;