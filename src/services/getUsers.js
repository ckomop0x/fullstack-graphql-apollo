import fetch from 'isomorphic-unfetch'

const endpoint = 'http://localhost:5000/users'

const opts = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
}

export default function getUsers () {
  return fetch(endpoint, opts)
    .then(res => res.json())
    .then( users => users)
}
