import React from 'react';
import Featurescontainer from '../features/Features';
import './gpt3.css'


const Gpt3container = () => {
    return ( 
        <div className='gpt3What sectionMargin' id='gpt3'>
            <div className='gpt3WhatFeature'>
            <Featurescontainer title ='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
            </div>
            <div className='gpt3WhatHeading'>
                <h1 className='gradientText'>The possibilities are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className='gpt3WhatContainer'>
                <Featurescontainer title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
                <Featurescontainer title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
                <Featurescontainer title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
            </div>
        </div>
    );
}
 
export default Gpt3container;