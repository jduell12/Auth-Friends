import React, {useState} from 'react';

const Login = () => {
    const initialFormValues = {
        username: '',
        password: ''
    }

    const [formValues, setValues] = useState(initialFormValues);

    const handleChanges = e => {
        setValues({...formValues, [e.target.name]: e.target.value})
    }

    const login = e => {
        e.preventDefault();
        console.log('in login');
        setValues(initialFormValues);
    }

    return(
        <div>
            <form onSubmit={login}>
                <label htmlFor="username">
                    Username: &nbsp;
                    <input id="username" name="username" type="text" value={formValues.username} onChange={handleChanges} />
                </label>
                <label htmlFor="password">
                    Password: &nbsp;
                    <input id="password" name="password" type="password" value={formValues.password} onChange={handleChanges} />
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;