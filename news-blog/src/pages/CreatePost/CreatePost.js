
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





    useEffect(() => {

        console.log("checking user data");

        if (user.access_token == null) {
            console.log('outside');
            nav("/signin");
        }

    }
        , []);



    const submit = async (e) => {
        e.preventDefault();
        // console.dir(e);
        let title = e.target.elements.title.value;
        let main = e.target.elements.main.value;
        if (title == '' || main == '') {
            alert("Please fill all the fields");
            return;
        }
        const data = {
            title: title,
            main: main
        }
        try {
            const res = await Axios.post('http://localhost:5000/api/v1/blogs', data, { headers: { Authorization: `Bearer ${user.access_token}`, body: data } });
            console.log(res.data);
            // setDatas(res.data);
            nav("/");
        }
        catch (e) {
            console.log(e);
        }


        console.log(e.target.elements.main.value)
        console.log(e.target.elements.title.value)
    }



    return (
        <BorderWrapper>
            <h1>Create Post</h1>
            <form action="" onSubmit={submit} className="form">
                <input type="text" className="header_style" id="title" placeholder='Title' />
                <input type="text" className="body_style" id="main" placeholder='Body' />
                <button type="submit">Post</button>
            </form>

        </BorderWrapper>
    );
}

export default CreatePost;