import React, { useState } from 'react';
import BorderWrapper from '../../components/BorderWrapper/BorderWrapper';
import Axios from 'axios';
import { useUser } from '../../UserContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useUser();

    // let email = '';

    const emailValue = (e) => {
        console.log(e.target.value);
        // email = e.target.value;
        setEmail(e.target.value);
        console.log(user.email);
    }

    const passwordValue = (e) => {
        console.log(e.target.value);
        // password = e.target.value;
        setPassword(e.target.value);
    }

    const submit = async (e) => {
        e.preventDefault();


        const data = {
            email: email,
            password_hash: password
        }
        try {
            const res = await Axios.post('http://localhost:5000/api/v1/users/signin', data);
            console.log(res.data);
            setUser(() => {
                return {
                    email: email,
                    ...res.data
                }
            })
        } catch (e) {
            console.log(e)
        }




    };



    return (
        <BorderWrapper>
            <div>
                {user.email && <h1>{user.email}</h1>}
            </div>

            <div>
                <h1>SignIn</h1>
                <form action="" onSubmit={submit} >
                    <BorderWrapper>
                        <p>Email </p>
                        <input type="email" id="email" onChange={emailValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <p >Password </p>
                        <input type="password" id="password" onChange={passwordValue} />
                    </BorderWrapper>
                    <button type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <a href="">Register</a></p>
            </div>
        </BorderWrapper>
    );
}
export default SignIn;