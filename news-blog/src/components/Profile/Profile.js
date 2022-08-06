import Axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";
import BorderWrapper from "../BorderWrapper/BorderWrapper";
import "../CommonCss.css";



const Profile = () => {

    const { user, setUser } = useUser();

    const nav = useNavigate();
    useEffect(() => {
        // console.log(user);

        if (user.access_token != null) {
            // console.log('outside');
            // nav("/signin");
            getInfo();
        }

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
        }
        catch (e) {
            console.dir(e);
            // alert(e.response.data);

        }

    }








    return (
        user != null && <BorderWrapper>
            <div>
                <div>

                    {/* <Font icon="fas fa-user-circle" /> */}

                    <h1>Profile</h1>
                </div>
                <div>
                    <h2>{user.name}</h2>
                </div>
                <div>
                    <h2>{user.email}</h2>
                </div>
                {/* <p>Joining date {user.join_date.toString().substring(0, 10)}</p> */}
            </div>

            <button> Edit</button>

        </BorderWrapper>
    );

}



export default Profile;