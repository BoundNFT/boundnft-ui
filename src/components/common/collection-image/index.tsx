import { ImageProps } from 'theme-ui'
import { gql, ApolloQueryResult } from '@apollo/client'
import { useQuery } from 'react-query'
import { boundNftApiClient } from 'modules/clients'
import { MotionBox } from '../motion-components'
import BoundImage from 'theme/ui/common/bound-image'

interface CollectionImage {
  collectionAddress: string
  width: number | string
  height: number | string
}

const GET_COLLECTION_IMAGE_BY_ADDRESS = gql`
  query NftCollectionImageByAddress($collectionAddress: String!) {
    nftCollection(address: $collectionAddress) {
      openseaImageURL
    }
  }
`

const CollectionImage: React.FC<CollectionImage & ImageProps> = ({ collectionAddress, width, height, ...restprops }) => {
  const { data, isLoading, isIdle } = useQuery(['NFT Collection Image', collectionAddress], async () => {
    const {
      data: { nftCollection }
    }: ApolloQueryResult<{ nftCollection: { openseaImageURL: string } }> = await boundNftApiClient.query({
      query: GET_COLLECTION_IMAGE_BY_ADDRESS,
      variables: {
        collectionAddress
      }
    })

    return nftCollection
  })

  if (isLoading || isIdle) return null

  if (!data)
    return (
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BoundImage imageUrl='/assets/images/no-image.png' width={width} height={height} {...restprops} />
      </MotionBox>
    )

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <BoundImage imageUrl={`/api/image?url=${data?.openseaImageURL}`} width={width} height={height} {...restprops} />
    </MotionBox>
  )
}

export default CollectionImage
