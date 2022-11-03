import axios from 'axios';

const token = localStorage.getItem('token');

export default function getUser(id) {
  return axios

    .get(`http://localhost:3000/api/lists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}