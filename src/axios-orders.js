import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-bdd7d.firebaseio.com/'
});

export default instance;