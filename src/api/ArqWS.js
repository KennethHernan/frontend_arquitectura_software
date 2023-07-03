import axios from 'axios';

const ArqWS = axios.create({
  baseURL: 'http://localhost:52528/WebService1.asmx',
});

export default ArqWS;
