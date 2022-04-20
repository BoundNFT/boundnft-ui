import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { ErrorResponse, onError } from '@apollo/client/link/error'
import { createContext, useContext, useMemo } from 'react'
import { API_ENDPOINTS, DEFAULT_CHAIN_ID } from '../constants'

type ApolloContextType = {
  boundNftClient?: ApolloClient<NormalizedCacheObject>
}

const ApolloContext = createContext<ApolloContextType>({})

export const useApolloContext = () => useContext(ApolloContext)

type ApolloContextProviderProps = {
  children: React.ReactNode
}

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

export default function ApolloContextProvider({ children }: ApolloContextProviderProps) {
  const boundNftClientLink = useMemo(() => new HttpLink({ uri: API_ENDPOINTS[DEFAULT_CHAIN_ID].BOUND_BNFT }), [])
  const errorLink = useMemo(
    () =>
      onError(({ graphQLErrors }: ErrorResponse) => {
        if (graphQLErrors?.length) {
          graphQLErrors.map(graphQLError => {
            console.log('❌ GraphQL Error:', graphQLError.message)
          })
        }
      }),
    []
  )

  const boundNftClient = useMemo(
    () =>
      new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: errorLink.concat(boundNftClientLink),
        cache: new InMemoryCache(),
        defaultOptions
      }),
    [boundNftClientLink, errorLink]
  )

  return (
    <ApolloContext.Provider
      value={{
        boundNftClient
      }}
    >
      {children}
    </ApolloContext.Provider>
  )
}
