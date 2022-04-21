import { ApolloQueryResult, gql } from '@apollo/client'
import { boundNftClient } from 'modules/clients'

const GET_BNFT_COLLECTION = gql`
  query Bnfts {
    bnfts(orderBy: nftSymbol, orderDirection: asc) {
      id
      symbol
      name
      nftAsset
      nftSymbol
      bnftProxy
      totalTokens
    }
  }
`

type BnftCollection = {
  id: string
  symbol: string
  name: string
  nftAsset: string
  nftSymbol: string
  bnftProxy: string
  totalTokens: string
}

type BnftCollectionData = {
  bnfts: Array<BnftCollection>
}

export type BnftCollectionReturn = BnftCollection & {
  key: string
}

export async function getBnftCollections(): Promise<Array<BnftCollectionReturn>> {
  const {
    data: { bnfts }
  }: ApolloQueryResult<BnftCollectionData> = await boundNftClient.query({
    query: GET_BNFT_COLLECTION
  })

  return bnfts.map(bnft => ({
    ...bnft,
    key: bnft.id
  }))
}
