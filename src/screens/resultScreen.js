import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AfterHeader from '../components/screenHeader'
import '../css/homescreen.css'

const EachBox = (props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <h3><u>{props.age1}-{props.age2}</u></h3>
            <h3><u>{props.money}</u></h3>
        </div>
    )
}


const App = (props) => {
    const [expense, setExpense] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(expense)
        props.history.push('/intrests');
    }

    const temp = "23456"

    return (
        <div>

            <AfterHeader name={"your milestone is ₹" + temp} />
            <div className="homeContainer">
                <form className="formContainer" onSubmit={onSubmitHandler}>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                        <h2><u>Age range</u></h2>
                        <h2><u>Expenses</u></h2>
                    </div>
                    <EachBox age1="21" age2="30" money="₹12000" />
                    <EachBox age1="31" age2="40" money="₹65000" />
                    <EachBox age1="41" age2="50" money="₹87000" />
                    <EachBox age1="51" age2="60" money="₹120000" />
                    <EachBox age1="61" age2="70" money="₹154000" />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button className="buttonStyle">Try Investing</button>
                    </div>

                    {/* <input className="buttonStyle" type="submit" value="Submit" /> */}
                </form>

            </div>
        </div>
    )
}

export default App;