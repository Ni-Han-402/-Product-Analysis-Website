import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import image from '../images/travel.png'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews([])
    const navigate = useNavigate();
    return (
        <div>
        <div className='travel-container flex items-center'>
            <div className="travel-content text-left p-8">
                <h1 className='text-4xl font-bold my-5'>We Provide Top Destinations</h1>
                <p className='text-1xl font-light'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>
            <div className="travel-img">
                <img src={image} alt="" />
            </div>
        </div>


        <div>
            <h1 className='text-5xl font-semibold mt-5'>Reviews</h1>
            <div className="review-section">
                {
                    reviews.map(review => <Review
                    key={review.id}
                    review={review}
                    ></Review>).slice(0, 3)
                }     
            </div>
            <button className='border-2 rounded-md border-orange-300 px-8 text-xl mb-8' onClick={() =>navigate('/reviews')}>See All</button>
        </div>

        </div>
    );

};

export default Home;