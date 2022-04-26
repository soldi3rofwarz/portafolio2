import React from 'react';
import './poss.css'
import possImg from '../../assets/possibility.png'


const Posscontainer = () => {
    return ( 
        <div className='gpt3__poss sectionPadding' id='poss'>
            <div className='gpt3__poss-image'>
                <img  src={possImg} alt="poss"/>
            </div>
            <div className='gpt3__poss-content'>
                <h4 >Request Early Access to Get Started </h4>
                <h1 className='gradientText'>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4 >Request Early Access to Get Started </h4>
            </div>
        </div>
    );
}
 
export default Posscontainer;