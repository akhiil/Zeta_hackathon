import React from 'react';

const App = (props) => {

    const styles = {
        logoStyle: {
            display: 'flex',
            backgroundColor: 'red',
            border: '8px solid black',
            borderRadius: 200,
            height: props.height,
            width: props.width,
            justifyContent: 'center',
            alignItems: 'center'
        }
    }

    return (
        <div style={styles.logoStyle}>
            <h1 style={{ fontSize: props.size, fontWeight: 'bold' }}>B</h1>
        </div>
    )
}
export default App;