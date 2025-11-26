
import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: process.env.BASEURL
})

export default axiosPublic;