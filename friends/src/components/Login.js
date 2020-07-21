import React, {useState} from 'react';

const Login = () => {
    const initialFormValues = {
        username: '',
        password: ''
    }

    const [formValues, setValues] = useState(initialFormValues);

    return(
        <div>
            <form>
                <input type="text"  />
            </form>
        </div>
    )
}

export default Login;