import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://backend-kmay.vercel.app'
    baseURL: 'http://localhost:4444/'
})

export default  instance;
