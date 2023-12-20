import axios from "axios";

const instance = axios.create({
    baseURL: 'https://backend-bay-three.vercel.app/'
    // baseURL: 'http://localhost:4444/'
})

export default  instance;