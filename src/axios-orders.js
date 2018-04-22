import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-example.firebaseio.com/'
});

export default instance;