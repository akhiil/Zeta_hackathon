import React,{ useState } from 'react';

const App = () => {

    const [userRegistration, setUserRegistration] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleData=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        console.log(field, value);
        setUserRegistration({... userRegistration,[field]: value})
    }

    return (
        <div>
            <h1>
                this is signup screen
            </h1>
            <form action="">
                <label htmlFor="name">Name</label>
                <input value={userRegistration.name} onChange={(e)=>handleData(e)} type="text" name="name" id="name" placeholder="Enter your name"/>
                <label htmlFor="password">password</label>
                <input value={userRegistration.password} onChange={(e)=>handleData(e)} type="password" name="password" id="password" placeholder="Enter your password"/>
                <label htmlFor="email">email</label>
                <input value={userRegistration.email} onChange={(e)=>handleData(e)} type="email" name="email" id="email" placeholder="Enter your email"/>
            </form>
        </div>
    )
}

export default App;