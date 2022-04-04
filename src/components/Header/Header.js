import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header flex justify-center py-5'>
            <CustomLink className="m-5" to={'/home'}>HOME</CustomLink>
            <CustomLink className="m-5" to={'/reviews'}>REVIEWS</CustomLink>
            <CustomLink className="m-5" to={'/dashboard'}>DASHBOARD</CustomLink>
            <CustomLink className="m-5" to={'/blogs'}>BLOGS</CustomLink>
            <CustomLink className="m-5" to={'/about'}>ABOUT</CustomLink>
        </div>
    );
};

export default Header;