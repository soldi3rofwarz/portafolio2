import React from 'react';
import './features.css'


const Featurescontainer = ({title, text}) => {
    return ( 
        <div className='gpt3FeaturesContainerFeatures'>
            <div className='gpt3FeaturesContainerFeaturesTitle'>
               <div/> 
               <h1>{title}</h1>
            </div>
            <div className='gpt3FeaturesContainerFeaturesText'>
                {text}
            </div>
        </div>
    );
}
 
export default Featurescontainer;