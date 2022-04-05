import React from 'react';
import './navbar.css'
import {RiMenu3Fill, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (  
        <div className='gpt3Navbar'>
            <div className='gpt3NavbarLinks'>
                <div className='gpt3NavbarLinksLogo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='gpt3NavbarLinksContainer'>
                    <p><a href='#'>Home</a></p>
                    <p><a href='#'>What is GPT</a></p>
                    <p><a href='#'>Open AI</a></p>
                    <p><a href='#'>Case Study</a></p>
                    <p><a href='#'>Library</a></p>
                </div>
            </div>
            <div className='gpt3NavbarSign'>
                <p>Sign in</p>
                <button type='button'>Sign in</button>
            </div>
        </div>
    );
}
 
export default Navbar;