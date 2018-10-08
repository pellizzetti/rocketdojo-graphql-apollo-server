import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import schema from './graphql/schema'

const server = new ApolloServer(schema)

const app = express()
server.applyMiddleware({ app })

app.listen(7000, () => {
    console.log('Server running!')
})