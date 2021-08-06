import React, { useState, useEffect } from 'react';
import { interestData } from '../components/interestData'
import AfterHeader from '../components/screenHeader'
import ScrollList from '../components/scrollList'
import '../css/homescreen.css'


const App = (props) => {
    const [expense, setExpense] = useState('');
    const [ageValue, setAgeValue] = useState('');
    const [interestValue, setInterestValue] = useState('');

    const check = (str) => {
        if (str.length === 0) return false;
        for (let i = 0; i < str.length; i++) {
            if (str[i] > '9' || str[i] < '0')
                return false;
        }
        return true;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(expense)
        if (check(expense) && check(ageValue) && check(interestValue)) {
            props.history.push('/results');
        } else {
            alert("please enter valid entry")
        }
        // console.log(expense, " ", ageValue, " ", interestValue)
    }

    return (
        <div>

            <AfterHeader name="Welcome to budget controller" />
            <div className="homeContainer">
                <form className="formContainer" onSubmit={onSubmitHandler}>
                    <label style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10 }}>
                            Enter you Age:-</h2>
                        <input
                            placeholder="Enter your age eg:- 22"
                            className="inputStyle"
                            type="text" value={ageValue} onChange={(e) => setAgeValue(e.target.value)} />

                        {/* <Select
                            value={null}
                            onChange={(value) => console.log(value)}
                            options={options}
                        /> */}

                    </label>
                    <label style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10 }}>
                            Monthly expense:-</h2>
                        <input
                            placeholder="In rupees eg:- 1000"
                            className="inputStyle" type="text" value={expense} onChange={(e) => setExpense(e.target.value)} />

                    </label>

                    <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 30, justifyContent: 'center' }}>
                        <h2 style={{ marginRight: 20 }}>
                            Select your compound Interest:-</h2>
                        <ScrollList data={interestData} valueSet={(value) => setInterestValue(value)} selected={interestValue} />

                    </label>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            className="buttonStyle">Know your milestone</button>
                    </div>

                    {/* <input className="buttonStyle" type="submit" value="Submit" /> */}
                </form>

            </div>
        </div>
    )
}

export default App;