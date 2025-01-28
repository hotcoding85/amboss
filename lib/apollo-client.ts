import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

// Update the HttpLink to point to your own API route
const httpLink = new HttpLink({
  uri: "/api/proxy", // The proxy API route we just created
  headers: {
    'Content-Type': 'application/json',
  },
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
