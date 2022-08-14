import { useUser } from "../../UserContext";
import Axios from 'axios';
import { useEffect, useState } from "react";
import BorderWrapper from "../../components/BorderWrapper/BorderWrapper";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import "../../components/CommonCss.css"
import Profile from "../../components/Profile/Profile";
import Post from "../../components/Post/Post";

// const datas = [];



const Home = () => {

    const nav = useNavigate();
    const [datas, setDatas] = useState([]);
    const [blogsCount, setBlogsCount] = useState(0);

    const { user, setUser } = useUser();
    // console.log(user);

    async function fetchData(data) {
        console.log("fetching data");

        if (data != null) {
            try {
                const res = await Axios.get('http://localhost:5000/api/v1/blogs', { headers: { Authorization: `Bearer ${data.access_token}` } })


                setDatas(res.data);


                let count = 0
                res.data.forEach(element => {
                    console.dir(element.user_id);
                    console.log(user.id);
                    if (element.user_id == data.id) {

                        count++;
                    }
                }
                );

                setBlogsCount(count);



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

    const getMyBlogs = async () => {
        console.log("fetching data");
        if (user != null) {
            try {
                const res = await Axios.get('http://localhost:5000/api/v1/blogs/myblogs', { headers: { Authorization: `Bearer ${user.access_token}` } })


                // res.data.forEach(element => {
                //     return <div>element.title</div>
                // });
                setDatas(res.data);



            }

            catch (e) {
                console.log(e);
            }


        }
        else {
            console.log('outside');
            nav("/signin");
        }
    }



    useEffect(() => {

        try {
            const data = localStorage.getItem('user');
            console.log('localStorage');
            console.dir(JSON.parse(data));
            if (data != null) {
                console.log('setting user data')
                setUser(() => {
                    return {
                        ...user,
                        ...JSON.parse(data)
                    }
                });
            }

            fetchData(JSON.parse(data));
        }
        catch (e) {
            console.log(e);
        }

        // fetchData();

    }
        , []);



    return (

        <>
            {/* <nav className="flex_right" >
                <Link className="button_border" to="/">Home</Link>
                <Link className="button_border" to="/createpost">Create Post</Link>
                <Link className="button_border" to="/signin">Sign In</Link>
                <Link className="button_border" to="/signup">Sign Up</Link>
                <Link className="button_border" to="/signIn" onClick={() => {
                    localStorage.removeItem('user');
                }}>Sign Out</Link>

                <Link className="button_border" style={{ borderRight: "3px solid black" }} to="/profile">Profile</Link>





            </nav> */}

            <BorderWrapper >
                {/* <h1>Homeeeeeeeeeeeee</h1>
                <button onClick={fetchData}>fetchData</button>
                {user.access_token == null && <BorderWrapper>
                    <h2><Link to="/signin">Sign In</Link></h2>
                </BorderWrapper>} */}
                <div className="home_main">
                    <div className="hider">
                        <Profile blogsCount={blogsCount} >
                        </Profile>
                    </div>

                    <div className="bounding">




                        <BorderWrapper className='paddingLeft'> <button onClick={getMyBlogs}  >My Blogs</button>
                            <div className="search">
                                <h2>Search</h2>
                                <input type="text" style={{ height: '3.5%', width: '100%' }} placeholder="Search by title, writer" name="search" onChange={(e) => {
                                    console.dir(e);
                                    setDatas(datas.filter(data => data.title.includes(e.target.value)));
                                    if (e.target.value == '') {
                                        console.log('empty');
                                        fetchData(user);
                                    }
                                }} />
                            </div>

                        </BorderWrapper>


                        {datas.length != 0 ? <div className="paddingLeft">
                            {
                                datas.map(data => {
                                    if (data.title == null) { return <h1>Blog not found</h1> }
                                    return <Post key={data.blogid} data={data} />
                                })

                            }
                        </div> : <h1>No Blogs Found</h1>}
                    </div>
                </div>
            </BorderWrapper>
        </>)


}
















export default Home;