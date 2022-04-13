
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPass]= useState('')
    // const [eror,setError]= useState('')
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePassBlur = e =>{
        setPass(e.target.value)
    }
    const handleUserSubmit = e=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Please Login !!</h1>
                <form onSubmit={handleUserSubmit}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email'  required/>

                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name='password' required/>
                    </div>
                    <input className='form-submit' type="submit" />
                </form>
                <p>{error?.message}</p>
                <p className='form-link'>
                    New to Ema-john? <Link to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;