import { useUser } from "../../UserContext";
import Axios from 'axios';
import { useState } from "react";
// import BorderWrapper from "../../components/BorderWrapper/BorderWrapper";


// const datas = [];



const Home = () => {
    const [datas, setDatas] = useState([]);

    const { user, setUser } = useUser();
    console.log(user);

    async function fetchData() {
        if (user.access_token != null) {
            try {
                const res = await Axios.get('http://localhost:5000/api/v1/blogs', { headers: { Authorization: `Bearer ${user.access_token}` } })

                console.log(res.data);

                // res.data.forEach(element => {
                //     return <div>element.title</div>
                // });
                setDatas(res.data);


            }

            catch (e) {
                console.log(e);
                return <div>e</div>
            }
            console.log('inside');

        }
    }
    return (<div>
        <h1>Homeeeeeeeeeeeee</h1>
        <button onClick={fetchData}>fetchData</button>
        <ul>
            {datas.map(data => {
                return <li>{data.title}</li>
            })}
        </ul>
    </div>)


}
















export default Home;