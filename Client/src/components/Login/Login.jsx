import React, { useContext, useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
import axios from "axios"

const Login = ({ setShowLogin }) => {

    const { url, setToken } = useContext(StoreContext);


    const [currentState, setCurrentState] = useState("Login")
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currentState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowLogin(false)
        }
        else {
            alert(response.data.message);
        }
    }


    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} action="" className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState} </h2>
                    <img onClick={() => setShowLogin(false)} src={assets.close_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> : <input name='username' onChange={onChangeHandler} value={data.username} type="text" placeholder='Your Name' required />}

                    <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder=' Your Email required' />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="text" placeholder='Password' required />
                </div>
                <button type='submit'>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By Continue, i agree to the terms of Privacy Policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create an Account? <span onClick={() => setCurrentState("SignUp")}>Click here</span></p>
                    : <p>Already have an account <span onClick={() => setCurrentState("Login")}>Login</span></p>}


            </form>
        </div>
    )
}

export default Login