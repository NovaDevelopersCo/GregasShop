import axios from "axios";

const instance = axios.create({
    baseURL: 'backend-kmay.vercel.app'
    // baseURL: 'http://localhost:4444/'
})

export default  instance;
