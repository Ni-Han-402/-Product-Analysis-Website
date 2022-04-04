import React from 'react';
import image from '../images/travel.png'
import './Home.css'

const Home = () => {
    return (
        <div className='travel-container flex items-center'>
            <div className="travel-content text-left p-8">
                <h1 className='text-4xl font-bold'>We Provide Top Destinations</h1>
                <p className='text-1xl font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="travel-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;