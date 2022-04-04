import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {img, name, reviews, ratings} = review;
    return (
        <div className='review-card p-5'>
            <img className='my-2' src={img} alt="" />
            <h1 className='text-2xl font-medium'>{name}</h1>
            <p className='my-2'>{reviews}</p>
            <p><small>Ratings: {ratings}</small></p>
        </div>
    );
};

export default Review;