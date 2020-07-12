import axios from 'axios';

export default axios.create({
  baseURL: 'https://healthify-theworld.herokuapp.com',
  headers: { 'content-type': 'multipart/form-data' },
});
