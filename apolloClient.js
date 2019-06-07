import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
// import { withClientState } from 'apollo-link-state'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'

// import { WebSocketLink } from 'apollo-link-ws';

// Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:5000/`,
//   options: {
//     reconnect: true
//   }
// });

const appCache = new InMemoryCache()

const errorLink = onError(({ graphQLErrors }) => {
	if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

// Not available yet wit Apollo and Typescript integration
// const stateLink = withClientState({
// 	cache: appCache,
// })

const httpLink = createHttpLink({
	uri: `https://r10.academy.red/graphql`,
	//credentials: 'same-origin',
})

const apolloClient = new ApolloClient({
	//when stateLink is integrated in future builds, add stateLink to ApolloLink.from
	link: ApolloLink.from([errorLink, httpLink]),
	cache: appCache,
})

export default apolloClient