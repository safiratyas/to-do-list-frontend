import axios from 'axios';

const token = localStorage.getItem('token');

export default function getUser() {
  return axios

    .get("http://localhost:3000/api/who-am-i", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}