import React from 'react';
import Logo from '../components/logo'

const App = (props) => {

    const styles = {
        triangle: {
            width: 0,
            height: 0,
            borderTop: '60px solid transparent',
            borderBottom: '60px solid transparent',

            borderLeft: '80px solid black'
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
            <div style={{
                backgroundColor: 'black',
                display: 'inline-flex',
                alignItems: 'center',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                paddingLeft: 20
            }}>

                <Logo height={70} width={70} size={40} />
                <h1 style={{ marginLeft: 20, color: 'white', fontFamily: 'cursive' }}>{props.name}</h1>

            </div>
            <div style={styles.triangle} />
        </div>
    )
}

export default App;