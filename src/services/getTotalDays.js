import fetch from 'isomorphic-unfetch'

const endpoint = 'http://localhost:4000'
const query = `
  query {
    totalDays
  }
`
const opts = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({query})
}

export default function getTotalDays () {
  return fetch(endpoint, opts)
    .then(res => res.json())
    .then(({ data }) => `totalDays: ${data.totalDays} - it's cool`)
}
