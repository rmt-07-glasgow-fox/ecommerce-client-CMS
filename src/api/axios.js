import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tokovue.herokuapp.com',
});

export default instance;
