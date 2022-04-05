import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='qus-part'>
            <div className="qus-ans p-5 m-8">
                <h1 className='text-3xl font-semibold mb-5'>1. What is Context Api?</h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context Api is the alternative to prop drilling. It can be access moving props from grandparent to child to parent. Context API is a (kind of) new feature added in version 16.3 of React, that allows one to share state across the entire app (or part of it) lightly and with ease. React.createContext() is all you need. It returns a consumer and a provider.</p>
            </div>
            <div className="qus-ans p-5 m-8">
                <h1 className='text-3xl font-semibold mb-5'>2. Difference Between Inline Inline-block and Block.</h1>
                <ul>
                    <li className='text-left'>
                        <h2 className='text-2xl mb-2'>Inline</h2>
                        <p>Displays an element as an inline element. Any height and width properties will have no effect. Some examples of inline elements are 'span', 'strong', and 'img' tags.</p>
                    </li><br />
                    <li className='text-left'>
                        <h2 className='text-2xl mb-2'>Inline-block</h2>
                        <p>Displays an element as an inline-level block container. You CAN set height and width values. One common use for using inline-block is for creating navigation links horizontally.</p>
                    </li><br />   
                    <li className='text-left'>
                        <h2 className='text-2xl mb-2'>Block</h2>
                        <p>Block starts on a NEW line and takes up the full width available. So that means block elements will occupy the entire width of its parent element. Some examples of block elements are 'div', 'h1', 'section'.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;