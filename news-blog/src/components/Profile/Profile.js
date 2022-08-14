import Axios from "axios";

import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import BorderWrapper from "../BorderWrapper/BorderWrapper";
import "../CommonCss.css";
import "./Profile.css";



const Profile = (props) => {

    const { user, setUser } = useUser();

    const nav = useNavigate();
    useEffect(() => {
        // console.log(user);

        // if (user.access_token != null) {
        // console.log('outside');
        // nav("/signin");
        getInfo();
        // }

    }
        , []);


    const getInfo = async () => {
        // console.log(user);

        try {
            const res = await Axios.get("http://localhost:5000/api/v1/users/info", { headers: { Authorization: `Bearer ${user.access_token}` } });

            console.dir(res);

            setUser(() => {
                return {
                    ...user,
                    ...res.data[0]
                }
            }
            )
            localStorage.setItem('user', JSON.stringify(user));

            console.log(user);
            console.log("profile user")
        }
        catch (e) {
            console.dir(e);
            // alert(e.response.data);
            nav("/signin");

        }

    }

    const getBlogByUserId = async () => {
        // console.log(user);

    }







    return (
        user != null && <BorderWrapper className='alignItemStart'>
            <div>
                <div >
                    <BorderWrapper className='prof_h1'>
                        {/* <Font icon="fas fa-user-circle" /> */}
                        {/* <img src="" alt="" />
                                 */}
                        <h1 >Profile</h1>
                    </BorderWrapper>
                </div>
                <BorderWrapper>
                    <div className="prof_main">
                        <img src={process.env.PUBLIC_URL + '/account_icon.png'} alt="logo" style={{ width: "35%", height: '35%' }} />
                        <div className="prof_main_left">
                            <h2>{user.name}</h2>
                            <h3>{user.email}</h3>
                            <h3>Total blog: {props.blogsCount}</h3>
                        </div>
                    </div>
                </BorderWrapper>
                {/* <p>Joining date {user.join_date.toString().substring(0, 10)}</p> */}
                <button onClick={
                    () => {
                        nav("/signup", { state: true });
                    }
                }> Edit Profile</button>
                <button onClick={
                    () => {
                        nav("/signin");
                    }
                }>Sign Out</button>
            </div>


        </BorderWrapper>
    );

}



export default Profile;