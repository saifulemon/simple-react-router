import React, { useEffect, useState } from 'react';

const Friends = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h3>I have Friends : {users.length}</h3>
        </div>
    );
};

export default Friends;