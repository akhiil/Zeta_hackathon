import React from 'react';
import '../css/header.css'


const App = (props) => {
    return (
        <div className="scrollListContainer">
            {props.data.map((item) => {
                return (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p onClick={() => {
                            props.valueSet(item.value);
                        }} style={{ backgroundColor: item.value === props.selected ? '#666666' : null }} className="eachItemScrollLIst">{item.label}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default App;