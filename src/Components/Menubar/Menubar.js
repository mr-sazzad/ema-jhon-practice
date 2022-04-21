import React from 'react';
import logo from '../../images/Logo.svg';
import './Menubar.css';

const Menubar = () => {
    return (
        <div className='menubar'>
            <div className='logo'>
                <img src={logo} alt='LOGO'></img>
            </div>
            <div className='link'>
                <a href='/Home'>Home</a>
                <a href='/Product'>Product</a>
                <a href='/Cart'>Cart</a>
                <a href='/About'>About</a>
                
            </div>
        </div>
    );
};

export default Menubar;