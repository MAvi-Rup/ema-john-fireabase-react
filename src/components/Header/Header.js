import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';

import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth)
    const navigate = useNavigate()
    const handleSignOut =()=>{
        signOut(auth)
        navigate('/login')
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user? <Link onClick={handleSignOut} to='/login'>Logout</Link> :<Link to='/login'>Login</Link>
                }
               
            </div>
        </nav>
    );
};

export default Header;