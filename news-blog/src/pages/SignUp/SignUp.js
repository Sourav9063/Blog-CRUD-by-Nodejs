import Axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BorderWrapper from "../../components/BorderWrapper/BorderWrapper";
import { useUser } from "../../UserContext";



const SignUp = () => {

    const state = useLocation().state;
    const { user, setUser } = useUser();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const nav = useNavigate();


    const emailValue = (e) => {
        console.log(e.target.value);
        // email = e.target.value;
        setEmail(e.target.value);
        console.log(user.email);
    }

    const nameValue = (e) => {
        console.log(e.target.value);
        // password = e.target.value;
        setName(e.target.value);
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
            password_hash: password,
            name: name,
        }
        try {
            let res;
            if (!state) {
                res = await Axios.post("http://localhost:5000/api/v1/users/signup", data);
            }
            else {
                if (user.access_token == null) {
                    nav("/signup");
                }
                res = await Axios.patch("http://localhost:5000/api/v1/users/update", data, { headers: { Authorization: `Bearer ${user.access_token}` } });

            }
            console.log(res.data);
            setUser(() => {
                return {
                    email: email,
                    name: name,
                    ...res.data
                }
            }
            );
            localStorage.setItem('user', JSON.stringify({
                email: email,
                name: name,
                ...res.data
            }));
            console.log('signup user status')
            console.log(user);
            // localStorage.setItem('user', JSON.stringify(user));

            nav("/");


        } catch (error) {

            console.dir(error);

            alert(error.response.data);

        }



    }




    return (

        <BorderWrapper>

            <div>
                {state ? <h1>Edit profile</h1> : <h1>Sign Up</h1>}
                <form action="" onSubmit={submit} >
                    <BorderWrapper>
                        <h3>Name </h3>
                        <input type="text" id="name" onChange={nameValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <h3>Email </h3>
                        <input type="email" id="email" onChange={emailValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <h3 >Password </h3>
                        <input type="password" id="password" onChange={passwordValue} />
                    </BorderWrapper>
                    <button type="submit"> {state ? 'Update' : 'Sign Up'}</button>
                </form>
                {state || <p>Already have an account?<Link to="/signin" style={{ color: '#0000ff', fontWeight: 'bold', padding: '5px', textDecoration: 'underLine' }}>Sign In</Link></p>}
            </div>
        </BorderWrapper>
    );

}


export default SignUp;