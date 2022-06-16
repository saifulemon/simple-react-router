import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const { name, phone, website, address, id } = friend;
    const history = useNavigate();

    const handleClick = () => {
        history(`/friend/${id}`);
    }

    return (
        <nav>
            <h2>I am {name} {id}</h2>
            <p>Call me: {phone}</p>
            <p>Visit me: {website}</p>
            <small>I live in: {address.city}</small>
            <br />
            <Link to={`/about/${id}`}>Visit Me</Link>
            <br />
            <button onClick={handleClick}>Visit</button>
        </nav>
    );
};

export default Friend;