import React, { useState, useEffect } from 'react';
import AfterHeader from '../components/screenHeader'

import '../css/homescreen.css'

import firebase from 'firebase'
require('firebase/auth')




const App = (props) => {


    const firebaseConfig = {
        apiKey: "AIzaSyAssP_u2GiFPZxwGE1fGs3DyHFIfoNYRFg",
        authDomain: "zeta-hackathon-529b5.firebaseapp.com",
        projectId: "zeta-hackathon-529b5",
        storageBucket: "zeta-hackathon-529b5.appspot.com",
        messagingSenderId: "387293980144",
        appId: "1:387293980144:web:666ab6cb6be69ff22de935"
      };
      // Initialize Firebase
      if( firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
     }
    //   firebase.initializeApp(firebaseConfig);
      
    //   console.log("Firebase initialized", firebase);
  


    const [Register, setRegister] = useState({
        name: "",
        email: "",
        password: ""
    });
    const detailHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setRegister({ ...Register, [name]: value });
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();

        console.log("button pressed");

        firebase.auth().createUserWithEmailAndPassword(Register.email, Register.password)
            .then((userCredential) => {
                // Signed in 
                var email = userCredential.user.email;
                console.log(email);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

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
                            className="inputStyle" name="name"
                            type="text" value={Register.name} onChange={(e) => detailHandler(e)} />

                    </label>

                    <label style={{ display: 'flex', flexDirection: 'row', marginBottom: 50, justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10, marginRight: 20 }}>
                            Email:-</h2>
                        <input
                            style={{ width: '70%' }}
                            placeholder="Enter your email"
                            className="inputStyle" name="email"
                            type="email" value={Register.email} onChange={(e) => detailHandler(e)} />

                    </label>
                    <label style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <h2 style={{ marginBottom: 10, marginRight: 20 }}>
                            password:-</h2>
                        <input
                            style={{ width: '70%' }}
                            placeholder="Enter your password"
                            className="inputStyle" name="password" type="password" value={Register.password} onChange={(e) => detailHandler(e)} />

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