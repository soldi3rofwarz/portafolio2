import React from 'react';
import Article from './../../components/Article/Article'
import './blog.css'
import {blog01,blog02,blog03,blog04,blog05} from './imports'


const Blogcontainer = () => {
    return ( 
        <div className='gpt3__blog sectionPadding' id='blog'>
            <div className='gpt3__blog-heading'>
                <h1 className='gradientText'> A lot is happening, We are blogging about it.</h1>
            </div>
            <div className='gpt3__blog-container'>
                <div className='gpt3__blog-container_groupA'>
                    <Article imgUrl={blog01}  date="Sep 26, 2021" title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                </div>
                <div className='gpt3__blog-container_groupB'>
                    <Article imgUrl={blog02}  date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imgUrl={blog03}  date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imgUrl={blog04}  date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                    <Article imgUrl={blog05}  date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
                </div>
            </div>
        </div>
    );
}
 
export default Blogcontainer;