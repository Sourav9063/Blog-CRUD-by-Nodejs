import { useUser } from "../../UserContext";
import Axios from 'axios';
import { useEffect, useState } from "react";
import BorderWrapper from "../../components/BorderWrapper/BorderWrapper";
import { Link, useNavigate } from "react-router-dom";

// const datas = [];



const Home = () => {

    const nav = useNavigate();
    const [datas, setDatas] = useState([]);

    const { user, setUser } = useUser();
    console.log(user);

    async function fetchData() {
        console.log("fetching data");

        if (user.access_token != null) {
            try {
                const res = await Axios.get('http://localhost:5000/api/v1/blogs', { headers: { Authorization: `Bearer ${user.access_token}` } })

                console.log(res.data);
                console.log(user);

                // res.data.forEach(element => {
                //     return <div>element.title</div>
                // });
                setDatas(res.data);


            }

            catch (e) {
                console.log(e);
            }
            console.log('inside');

        }
        else {
            console.log('outside');
            nav("/signin");
        }
    }

    useEffect(() => {

        fetchData();

    }
        , []);



    return (

        <>
            <nav >
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/createpost">Create Post</Link>
                <BorderWrapper>
                    <Link to="/">Home</Link>
                </BorderWrapper>


            </nav>
            <BorderWrapper>
                <h1>Homeeeeeeeeeeeee</h1>
                <button onClick={fetchData}>fetchData</button>
                {user.access_token == null && <BorderWrapper>
                    <h2><Link to="/signin">Sign In</Link></h2>
                </BorderWrapper>}
                <ul>
                    {datas.map(data => {
                        return <BorderWrapper>
                            <li key={data.blogid} ><h1>{data.title}</h1>
                                <p>{data.main}</p>
                            </li>
                        </BorderWrapper>
                    })}
                </ul>
            </BorderWrapper>
        </>)


}
















export default Home;