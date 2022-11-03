import axios from 'axios';

const token = localStorage.getItem('token');

export default function createTransaction(body) {
  const bodyInput = {
    name: body.name,
  };
  console.log(bodyInput);
  return axios
    // eslint-disable-next-line prefer-template
    .post(
      "http://localhost:3000/api/lists",
      bodyInput,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
}
