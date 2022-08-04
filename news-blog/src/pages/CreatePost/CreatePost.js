
import BorderWrapper from '../../components/BorderWrapper/BorderWrapper';
import { useUser } from '../../UserContext';
import './CreatePost.css';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {

    const [title, setTitle] = useState('');
    const [main, setMain] = useState('');
    const { user, setUser } = useUser();

    const [datas, setDatas] = useState([]);

    const nav = useNavigate();



    async function submit() {
        console.log("fetching data");

        if (user.access_token != null) {
            try {
                const res = await Axios.post('http://localhost:5000/api/v1/blogs', {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`, body: datas
                    }
                })

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

        submit();

    }
        , []);



    return (
        <BorderWrapper>
            <h1>Create Post</h1>
            <form action="" onSubmit={submit}>
                <input type="text" className="header_style" id="title" placeholder='Title' />
                <input type="text" className="body_style" id="main" placeholder='Body' />
                <button type="submit">Post</button>
            </form>

        </BorderWrapper>
    );
}

export default CreatePost;