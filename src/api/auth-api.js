import axios from '../config/axios';

export const register = input => axios.post('http://localhost:8000/auth/register', input);
export const login = input => axios.post('/auth/login', input);
export const getMe = () => axios.get("/auth/me")