import axios from 'axios';

const API_URL = 'https://mannaiposthandler.onrender.com/api/v1/auth/';


const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

const logout = async() => {
  localStorage.removeItem('token');
  return true
};

export default {
  login,
  logout,
};
