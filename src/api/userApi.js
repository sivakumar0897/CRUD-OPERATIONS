import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export const login = (credentials) => axios.post(`${BASE_URL}/login`, credentials);
export const registerUser = (userData) => {
  return axios.post(`${BASE_URL}/register`, userData);
};
export const sendPasswordReset = (email) => {
    return axios.post(`${BASE_URL}/forgot-password`, { email });
  };
  
  export const getUsers = (page = 1) => axios.get(`${BASE_URL}/users?page=${page}`);


  export const createUser = (userData) => axios.post(`${BASE_URL}/users`, userData);
  export const updateUser = (id, userData) => axios.put(`${BASE_URL}/users/${id}`, userData);
  

export const deleteUser = (id) => axios.delete(`${BASE_URL}/users/${id}`);
