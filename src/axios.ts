import axios from "axios";

const instance = axios.create({

    baseURL: 'https://backend-bay-three.vercel.app/'

})

export default instance;