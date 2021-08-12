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

async function html() {
    const url = 'https://cors-anywhere.herokuapp.com/http://groww.in/mutual-funds/category/best-equity-mutual-funds';
    const response = await fetch(url, {
        // 'mode': 'cors',
        // 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36'
    });
    const html = (await response.text()); // html as text
    // console.log(html);
    const doc = new DOMParser().parseFromString(html, 'text/html');

    // console.log(doc.title, doc.body);
    // const table=doc.querySelector("#seoTopFundsList > table > tbody");
    for (let i = 1; i <= 5; i++) {

        let data = doc.querySelector("#seoTopFundsList > table > tbody > tr:nth-child(" + i + ") > td:nth-child(2) > a").innerHTML;

        console.log(data);
        // the data variable will have the names of eqity mutual funds

    }
    // console.log(table);
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