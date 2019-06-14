import fetch from 'isomorphic-unfetch'

const endpoint = 'http://localhost:4999/users/add'

const opts = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({username})
}

export default function getUsers () {
  return fetch(endpoint, opts)
    .then(console.log)
    .catch(console.log)
}
