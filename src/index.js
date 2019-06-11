const endpoint = 'http://localhost:4000'
const fetch = require('isomorphic-unfetch')

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

fetch(endpoint, opts)
  .then(res => res.json())
  .then(({ data }) => `totalDays: ${data.totalDays} - it's cool`)
  .then(console.log)
  .catch(console.error)
