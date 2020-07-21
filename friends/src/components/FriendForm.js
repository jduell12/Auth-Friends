import React, {useState} from 'react';

import {axiosWithAuth} from '../utils/axiosWithAuth'

const FriendForm = () => {
    const initialFormValues = {
        name: '',
        age: '',
        email: ''
    }

    const[formValues, setFormValues] = useState(initialFormValues);

    const submitFriend = e => {
        e.preventDefault();
        


        setFormValues(initialFormValues);
    }

    const handleChanges = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    return(
        <form className="friendForm" onSubmit={submitFriend}>
            <label htmlFor="name">
                Name: &nbsp;
                <input type="text" name="name" id="name" value={formValues.name} onChange={handleChanges}/>
            </label>
            <label htmlFor="age">
                Age: &nbsp;
                <input type="number" min="0" step="1" id="age" name="age" value={formValues.age} onChange={handleChanges} />
            </label>
            <label htmlFor="email">
                Email: &nbsp;
                <input type="email" id="email" name="email" value={formValues.email} onChange={handleChanges} />
            </label>
            <button>Add Friend</button>
        </form>
    )
}

export default FriendForm;