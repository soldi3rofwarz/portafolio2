import React,{useState} from 'react';
import './navbar.css'
import {RiMenu3Fill, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu = ()=>(
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT</a></p>
    <p><a href='#poss'>Open AI</a></p>
    <p><a href='#festures'>Case Study</a></p>
    <p><a href='#blog'>Library</a></p>
    </>
)

const Navbar = () => {

    const [toggle, settoogle]= useState(false)
    return (  
        <div className='gpt3Navbar'>
            <div className='gpt3NavbarLinks'>
                <div className='gpt3NavbarLinksLogo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='gpt3NavbarLinksContainer'>
                    <Menu/>
                </div>
            </div>
            <div className='gpt3NavbarSign'>
                <p>Sign in</p>
                <button type='button'>Sign in</button>
            </div>
            <div className='gpt3NavbarMenu'>
                {toggle? <RiCloseLine color='#fff' size={27} onClick={()=>settoogle(false)}/>
                : <RiMenu3Fill color='#fff' size={27} onClick={()=>settoogle(true)}/>    
                }
                {toggle && (
                    <div className='gpt3NavbarMenuContainer scale-up-center'>
                        <div className='gpt3NavbarMenuContainerLinks'>
                            <Menu/>
                            <div className='gpt3NavbarMenuContainerLinksSign'>
                                <p>Sign in</p>
                                <button type='button'>Sign in</button>
                            </div>
                        </div>    
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default Navbar;