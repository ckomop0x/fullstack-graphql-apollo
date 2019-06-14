const {ApolloServer} = require('apollo-server')

// Server requires 2 fields
// GraphQL schema
const typeDefs = `
  type Query {
    "Count of total days skied during a season"
    totalDays: Int
  }
`

// Functions that resolve data for each field
const resolvers = {
  Query: {
    totalDays: () => 150
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server
  .listen()
  .then(({url}) => `GraphQL server is listening on ${url}`)
  .then(console.log)
  .catch(console.error)
