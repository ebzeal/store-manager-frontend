import axios from 'axios';

const token = localStorage.getItem('userToken');

export const apiInstance = axios.create({
  // baseURL: 'http://localhost:3000/api/v1'
  baseURL: 'https://v2-store-manager.herokuapp.com/api/v1/'
});

const makeRequest = (url, options = { method: 'GET' }) => {
  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: token
    }
  }).then(response => response.data);
};

export default makeRequest;
