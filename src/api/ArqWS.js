import axios from 'axios';

const ArqWS = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ArqWS;
