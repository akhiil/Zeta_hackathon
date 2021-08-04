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

const App = () => {
    const [ageValue, setAgeValue] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(ageValue)
    }

    const onlyNum=(e)=> {
        // this function limit input to only numeric
        // console.log(e);

        e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
        
    }

    return (
        <div>

            <AfterHeader />
            <div className="homeContainer">
                <form className="formContainer" onSubmit={onSubmitHandler}>
                    <label>
                        <h2 style={{ marginBottom: 10 }}>
                            Select age range:-</h2>
                        {/* <input type="text" value={ageValue} onChange={(e) => setAgeValue(e.target.value)} /> */}

                        <Select
                            value={null}
                            onChange={(value) => console.log(value)}
                            options={options}
                        />

                    </label>
                    <label>
                        <h2 style={{ marginBottom: 10 }}>
                            Enter your Expense:-</h2>
                        <input
                            placeholder="In rupees"
                            className="inputStyle" type="text" value={ageValue} onInput={(e)=> {onlyNum(e)}} onChange={(e) => setAgeValue(e.target.value)} />

                    </label>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className="buttonStyle">Submit</button>
                    </div>

                    {/* <input className="buttonStyle" type="submit" value="Submit" /> */}
                </form>

            </div>
        </div>
    )
}

export default App;