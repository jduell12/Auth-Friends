import React, {useState, useEffect} from 'react';

// utility functions
import {axiosWithAuth} from '../utils/axiosWithAuth';

//contexts
import {FriendsContext} from '../contexts/FriendsContext';

//components
import FriendForm from './FriendForm';
import EditFriend from './EditFriend';

const Friends = props => {
    const [friends, addFriends] = useState([]);
    const [friend, setFriend] = useState({});
    const [edit, setEdit] = useState(false);

    const getFriends = () => {
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                addFriends(res.data);
            })
            .catch(err => console.log(err));
    }

    const editFriend = friend => {
        setFriend(friend);
        setEdit(true);
    }

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`api/friends/${id}`)
            .then( res => {
                addFriends(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getFriends();
    }, []);

    return(<div>
        <h1>Friends</h1>
        {!edit ? (
            <div>
                <h2>Add a new Friend</h2>
                <FriendsContext.Provider value={{addFriends}}>
                    <FriendForm />
                </FriendsContext.Provider>
            </div>
        ) : <span></span>}
        {friends.length > 0 ? <span></span> :  <p>Loading...</p>}
        {(friends.length > 0 && !edit)? friends.map(friend => {
           return (
                <div key={friend.id}>
                    <h3>{friend.name}</h3>
                    <p>Age: {friend.age}</p>
                    <p>Email: {friend.email}</p>
                    <button onClick={() => editFriend(friend)}>Edit Friend</button>
                    <button onClick={() => deleteFriend(friend.id)}>Delete Friend</button>
                </div>
            )
        }) : <span></span>}
        {
            (friends.length > 0 && edit) ? <EditFriend friend={friend} setEdit={setEdit} addFriends={addFriends}/> :<span></span>
        }
    </div>)
}

export default Friends;