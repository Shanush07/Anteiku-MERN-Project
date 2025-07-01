import React, { useState } from 'react';
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios"

const LoginPopUp = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangehandler = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setData(data=>({...data, [name]:value}))
    }

    const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
        newUrl += '/api/user/login';
    } else {
        newUrl += '/api/user/register';
    }

    try {
        const response = await axios.post(newUrl, data);

        if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false); // ✅ close popup on success
        } else {
        alert(response.data.message);
        }
    } catch (err) {
        console.error("Login/Register Error:", err);
        alert("Something went wrong. Check console.");
    }
    };


  return (
    <div className='login-popup'>
        <form onSubmit={onLogin} className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input name='name' onChange={onChangehandler} value={data.name} type="text" placeholder='Your Name' required/>}
                <input name='email' onChange={onChangehandler} value={data.email} type="email" placeholder='Your Email' required/>
                <input name='password' onChange={onChangehandler} value={data.password}  type="password" placeholder='Password' required/>
            </div>
            <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use and privacy policy.</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span> </p>
            :<p>Already have a account? <span onClick={()=>setCurrState("Login")}>Login here</span> </p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopUp