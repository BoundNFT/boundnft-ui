import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache } from '@apollo/client'
import { ErrorResponse, onError } from '@apollo/client/link/error'
import { API_ENDPOINTS, DEFAULT_CHAIN_ID } from 'modules/wallet/constants'

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'no-cache',
    errorPolicy: 'ignore'
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all'
  }
}

const boundNftClientLink = new HttpLink({ uri: API_ENDPOINTS[DEFAULT_CHAIN_ID].BOUND_BNFT })
const boundNftApiClientLink = new HttpLink({ uri: API_ENDPOINTS[DEFAULT_CHAIN_ID].BOUND_NFTAPI })

const errorLink = onError(({ graphQLErrors }: ErrorResponse) => {
  if (graphQLErrors?.length) {
    graphQLErrors.map(graphQLError => {
      console.log('❌ GraphQL Error:', graphQLError.message)
    })
  }
})

export const boundNftClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: errorLink.concat(boundNftClientLink),
  cache: new InMemoryCache(),
  defaultOptions
})

export const boundNftApiClient = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: errorLink.concat(boundNftApiClientLink),
  cache: new InMemoryCache(),
  defaultOptions
})
