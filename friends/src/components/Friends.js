import React, {useState, useEffect} from 'react';

// utility functions
import {axiosWithAuth} from '../utils/axiosWithAuth';

//contexts
import {FriendContext} from '../contexts/FriendContext'

//components
import FriendForm from './FriendForm';

const Friends = props => {

    const [friends, addFriends] = useState([]);

    const getFriends = () => {
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                addFriends(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getFriends();
    }, []);


    return(<div>
        <h1>Friends</h1>
        <h2>Add a new Friend</h2>
        <FriendContext.Provider value={{addFriends}}>
            <FriendForm />
        </FriendContext.Provider>
        {friends.length > 0 ? friends.map(friend => {
           return (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                </div>
            )
        }) : <p>Loading...</p>}
    </div>)
}

export default Friends;