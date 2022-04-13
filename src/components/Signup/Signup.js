import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPass]= useState('')
    const [confirmPass, setCpass]= useState('')
    const [error,setError]= useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()

    const handleEmailBlur = e =>{
        setEmail(e.target.value)
    }
    const handlePassBlur = e =>{
        setPass(e.target.value)
    }
    const handleConfirmPass = e =>{
        setCpass(e.target.value)
    }
    const createUser = e=>{
        e.preventDefault()
        if(password !== confirmPass){
            setError('Your Password Does not match')
        }
        if(password.length < 6){
            setError('Password must be contain 6 charecters')
        }
        createUserWithEmailAndPassword(email,password)
    }
    if(user){
        navigate('/shop')
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Please Login !!</h1>
                <form onSubmit={createUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />

                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name='password' required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPass} type="password" name='confirm-password' required />
                    </div>
                    <input className='form-submit' type="submit" value='Sign Up' />
                    <p>{error}</p>
                </form>
                <p className='form-link'>
                    Allready have an account? <Link to='login'>Sign in to your account</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;