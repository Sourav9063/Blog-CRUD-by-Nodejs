import Axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BorderWrapper from "../../components/BorderWrapper/BorderWrapper";
import { useUser } from "../../UserContext";



const SignUp = () => {


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
            const res = await Axios.post("http://localhost:5000/api/v1/users/signup", data);
            console.log(res.data);
            setUser(() => {
                return {
                    email: email,
                    name: name,
                    ...res.data
                }
            }
            );
            localStorage.setItem('user', JSON.stringify(user));

            nav("/");


        } catch (error) {

            console.dir(error);

            alert(error.response.data);

        }



    }




    return (

        <BorderWrapper>
            <div>
                {user.email != null && <h1>{user.email}</h1>}
            </div>

            <div>
                <h1>Sign Up</h1>
                <form action="" onSubmit={submit} >
                    <BorderWrapper>
                        <p>Name </p>
                        <input type="text" id="name" onChange={nameValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <p>Email </p>
                        <input type="email" id="email" onChange={emailValue} />
                    </BorderWrapper>
                    <BorderWrapper>
                        <p >Password </p>
                        <input type="password" id="password" onChange={passwordValue} />
                    </BorderWrapper>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account?<Link to="/signin">Sign In</Link></p>
            </div>
        </BorderWrapper>
    );

}


export default SignUp;