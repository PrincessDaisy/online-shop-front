import Axios from 'axios';

const instanceAPI = Axios.create({
  baseURL: 'https://localhost:44395/OnlineShop',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instanceAPI;
