import React, { useEffect, useState } from 'react';
import BorderWrapper from '../../components/BorderWrapper/BorderWrapper';
import Axios from 'axios';
import { useUser } from '../../UserContext';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { user, setUser } = useUser();


    const navigate = useNavigate();



    // let email = '';


    const emailValue = (e) => {
        console.log(e.target.value);
        // email = e.target.value;
        setEmail(e.target.value);
        // console.log(user.email);
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
        // localStorage.setItem('items', JSON.stringify(data));
        try {
            const res = await Axios.post('http://localhost:5000/api/v1/users/signin', data);
            console.log(res.data);
            setUser(() => {

                return {
                    email: email,
                    ...res.data
                }
            })
            console.log('signin user status')
            console.log(user);
            localStorage.setItem('user', JSON.stringify({
                email: email,
                ...res.data
            }));
            navigate("/")

        } catch (e) {
            console.log(e)
            alert(e.response.data);
        }




    };

    // const { user, setUser } = useUusser();
    useEffect(() => {


        setUser(() => {
            return {

            }
        }
        );
        localStorage.removeItem('user');
    }
        , []);


    return (
        <BorderWrapper>


            <div>
                <h1>SignIn</h1>
                <form action="" onSubmit={submit} >
                    <BorderWrapper>
                        <h3>Email </h3>
                        <input type="email" id="email" onChange={emailValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <h3>Password </h3>
                        <input type="password" id="password" onChange={passwordValue} />
                    </BorderWrapper>
                    <button type="submit">Sign In</button>
                </form>
                <p>Don't have an account? <Link to="/signup" style={{ color: '#0000ff', fontWeight: 'bold', padding: '5px', textDecoration: 'underLine' }}>Register</Link></p>
            </div>
        </BorderWrapper>
    );
}
export default SignIn;