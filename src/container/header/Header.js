import React from 'react';
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'


const Headercontainer = () => {
    return ( 
        <div className='gpt3Header sectionPadding' id='home'>
            <div className='gpt3HeaderContent'>
                <h1 className='gradientText'> Let's Build Something amazing with GPT3 OpenAI</h1>
               <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className='gpt3HeaderContentInput'>
                    <input type='email' placeholder='Email' />
                    <button type='button'>Get started</button>
                </div>
                <div className='gpt3HeaderContentPeople'>
                    <img src={people}/>
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
                
            </div>
            <div className='gpt3HeaderImage'>
                <img src={ai} alt='ai'/>
            </div>
        </div>
    );
}
 
export default Headercontainer;