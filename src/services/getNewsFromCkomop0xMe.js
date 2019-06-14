import fetch from 'isomorphic-unfetch'

const endpoint = 'https://admin.ckomop0x.me/graphql'
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

export default function getNewsFromCkomop0xMe () {
  return fetch(endpoint, opts)
    .then(res => res.json())
    .then(({ data }) => `totalDays: ${data.totalDays} - it's cool`)
}
