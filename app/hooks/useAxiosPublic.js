import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'http://pathshala.cloud/pathshala_2011_app/web/'
})

export default axiosPublic;