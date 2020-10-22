import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const EditFriend = props => {
    const {friend, setEdit, addFriends} = props;
    
    const friendValues ={
        name: friend.name,
        age: friend.age,
        email: friend.email
    }

    const [friendInfo, editFriendInfo] = useState(friendValues);

    const handleChanges = e => {
        editFriendInfo({...friendInfo, [e.target.name]: e.target.value })
    }

    const editFriend = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`api/friends/${friend.id}`, friendInfo)
            .then(res => {
                addFriends(res.data);
            })
            .catch(err => console.log(err));
        setEdit(false);
    }

    return(
        <div>
            <h2>Edit Friend</h2>
            <form onSubmit={editFriend}>
                <label htmlFor="name">
                    Name: &nbsp;
                    <input id="name" name="name" value={friendInfo.name} onChange={handleChanges}/>
                </label>
                <label htmlFor="age">
                    Age: &nbsp;
                    <input id="age" name="age" value={friendInfo.age} onChange={handleChanges}/>
                </label>
                <label htmlFor="email">
                    Email: &nbsp;
                    <input id="email" name="email" value={friendInfo.email} onChange={handleChanges} />
                </label>
                <button>Edit Friend</button>
            </form>
        </div>
    )
}

export default EditFriend;