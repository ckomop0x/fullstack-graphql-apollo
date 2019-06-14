import { request } from 'graphql-request';

const endpoint = 'http://localhost:4000'
const query = `
  query {
    totalDays
  }
`

export default function getTotalDaysWithGraphqlRequest() {
  return request(endpoint, query)
    .then(({ totalDays }) => totalDays)
}
