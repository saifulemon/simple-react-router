import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link activeStyle={{color: 'red'}} to="/home">Home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/about">About</Link>
            <Link to="/about/culture">Culture</Link>
        </div>
    );
};

export default Header;