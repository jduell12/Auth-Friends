import React, {useState} from 'react';
import e from 'express';


const EditFriend = props => {
    const {friend} = props;
    
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
    }

    return(
        <div>
            <h2>Edit Friend</h2>
            <form onSubmit={editFriend}>
                <label htmlFor="name">
                    Name: &nbsp;
                    <input id="name" name="name" value={friendValues.name} onChange={handleChanges}/>
                </label>
                <label>
                    <input />
                </label>
                <label>
                    <input />
                </label>
            </form>
        </div>
    )
}

export default EditFriend;