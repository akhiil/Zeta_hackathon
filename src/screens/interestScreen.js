import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import AfterHeader from '../components/screenHeader'
import '../css/homescreen.css'

const options = [
    { value: '10', label: '0 yrs to 10 yrs' },
    { value: '20', label: '11 yrs to 20 yrs' },
    { value: '30', label: '21 yrs to 30 yrs' },
    { value: '40', label: '31 yrs to 40 yrs' },
    { value: '50', label: '41 yrs to 50 yrs' },
    { value: '60', label: '51 yrs to 60 yrs' },
    { value: '70', label: '61 yrs to 70 yrs' },
    { value: '80', label: '71 yrs to 80 yrs' },
    { value: '90', label: '81 yrs to 90 yrs' },
    { value: '100', label: '91 yrs to 100+ yrs' },
];

const App = (props) => {
    const [expense, setExpense] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(expense)
        props.history.push('/results');
    }

    return (
        <div>

            <AfterHeader name="Enter your Compond Interest below" />
            <div className="homeContainer">
                <form className="formContainer" onSubmit={onSubmitHandler}>

                    <label>
                        <input
                            style={{ textAlign: 'center' }}
                            placeholder="Your compound interest in %"
                            className="inputStyle" type="text" value={expense} onChange={(e) => setExpense(e.target.value)} />

                    </label>


                </form>

            </div>
        </div>
    )
}

export default App;