import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://cmsx-29612.firebaseio.com/'
})

export default instance;