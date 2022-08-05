
import Axios from "axios";

export const getUserInfoByID = async (id, token) => {


    try {
        const res = await Axios.get(`http://localhost:5000/api/v1/users/info/${id}`, { headers: { Authorization: `Bearer ${token}` } });

        // console.dir(res);
        return res;



    }
    catch (e) {
        return e;
        console.dir(e);
        // alert(e.response.data);

    }

}