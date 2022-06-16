import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AboutDetail = () => {

    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const history = useNavigate();

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    });

    const handleFriend = () => {
        history('/friends');
    }

    return (
        <div>
            <h3>About Detail of: {friendId}</h3>
            <h1>Name: {friend.name}</h1>
            <h4>Phone: {friend.phone}</h4>
            <p>Website: {friend.website}</p>
            <small>Works at : {friend.company?.name}</small>
            <button onClick={handleFriend}>See All Friend</button>
        </div>
    );
};

export default AboutDetail;