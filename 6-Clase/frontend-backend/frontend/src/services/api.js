import axios from 'axios';

const API_URL = 'http://localhost:5000/api/usuarios';

export const getUsuarios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createUsuario = async (usuario) => {
  const response = await axios.post(API_URL, usuario);
  return response.data;
};

export const updateUsuario = async (id, usuario) => {
  const response = await axios.put(`${API_URL}/${id}`, usuario);
  return response.data;
};

export const deleteUsuario = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
