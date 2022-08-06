import { useEffect, useState } from "react";
import { useUser } from "../../UserContext";
import BorderWrapper from "../BorderWrapper/BorderWrapper";
import { getUserInfoByID } from "../CommonFunc";
import "./Post.css";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";


const Post = (props) => {

    const nav = useNavigate();

    const data = props.data;
    const { user, setUser } = useUser();

    const [writer, setWriter] = useState({});
    const getWriter = async () => {
        try {
            const res = await getUserInfoByID(data.user_id, user.access_token);
            setWriter(res.data[0]);
            // console.dir(writer);
        }
        catch (e) {
            console.log("error");
            // alert(e.response.data);
        }
    }

    useEffect(() => {
        getWriter();
        if (user.access_token == null) {
            console.log('outside');
            nav("/signin");
        }
        // console.dir(writer);
    }
        , []);


    const deletePost = async () => {
        if (writer.id === user.id) {
            try {

                const res = await Axios.delete(`http://localhost:5000/api/v1/blogs/delete/${data.blogid}`, { headers: { Authorization: `Bearer ${user.access_token}` } });
                console.dir(res);
                // props.refresh();

                window.location.reload();
            }
            catch (e) {
                console.log("error");
                alert("Error occured");
            }
        }
        else {
            alert("You are not authorized to delete this post");
        }
    }




    return (
        <BorderWrapper>
            <div key={data.blogid} className="post_main" >
                <div className="post_head">
                    <h2>{data.title.toString()}</h2>
                    <div>
                        <p>Created:{data.create_date.toString().substring(0, 10)}</p>

                        <p>Writer:{writer.name}</p>
                    </div>
                </div>
                <div className="post_body">
                    <p>{data.main.toString()}</p>
                </div>

                {writer.id === user.id && <div>
                    <button onClick={() => {

                        nav('createpost ', { state: { id: data.blogid } });
                    }} >Edit Post</button>
                    <button onClick={deletePost}>Delete Post</button>
                </div>}
            </div>

        </BorderWrapper>
    )

}


export default Post;