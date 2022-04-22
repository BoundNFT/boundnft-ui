import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Text, Box } from 'theme-ui'
import { ITableColumn } from '../interfaces'
import { BnftCollectionReturn } from 'utils/api/get-bnft-collections'
import CollectionImage from 'components/common/collection-image'
import { shortenAddress } from 'utils/shorten-address'

export const useColumns = () => {
  const { t } = useTranslation('common')

  const collectionListColumns = useMemo(
    (): ITableColumn[] => [
      {
        key: 'avatar',
        dataIndex: 'avatar',
        title: t('label.avatar'),
        align: 'left',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return (
            <Flex sx={{ alignItems: 'left' }}>
              <Box sx={{ width: 88, height: 44, minWidth: 88, position: 'relative' }}>
                <CollectionImage collectionAddress={data.nftAsset} width={88} height={44} />
              </Box>
            </Flex>
          )
        }
      },
      {
        key: 'collectionName',
        dataIndex: 'collectionName',
        title: t('label.collection-name'),
        align: 'left',
        width: '180px',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return <Text variant='styles.table-row-text'>{data.nftSymbol}</Text>
        }
      },
      {
        key: 'collectionAddress',
        dataIndex: 'collectionAddress',
        title: t('label.collection-address'),
        width: '300px',
        align: 'left',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return (
            <Text variant='styles.table-row-text' color='accent'>
              {shortenAddress(data.nftAsset, 6)}
            </Text>
          )
        }
      },
      {
        key: 'boundNFTName',
        dataIndex: 'boundNFTName',
        title: t('label.boundnft-name'),
        align: 'left',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return <Text variant='styles.table-row-text'>{data.symbol}</Text>
        }
      },
      {
        key: 'boundNFTAddress',
        dataIndex: 'boundNFTAddress',
        title: t('label.boundnft-address'),
        align: 'left',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return (
            <Text variant='styles.table-row-text' color='accent'>
              {shortenAddress(data.bnftProxy, 6)}
            </Text>
          )
        }
      },
      {
        key: 'totalNfts',
        dataIndex: 'totalNfts',
        title: t('label.total-nfts'),
        align: 'right',
        hideSort: true,
        Render(data: BnftCollectionReturn) {
          return (
            <Flex sx={{ justifyContent: 'right' }}>
              <Text variant='styles.table-row-text'>{data.totalTokens}</Text>
            </Flex>
          )
        }
      }
    ],
    [t]
  )

  return {
    collectionListColumns
  }
}
