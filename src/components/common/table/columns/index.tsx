import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { Flex, Text, Box, Link } from 'theme-ui'
import useResponsive from '../../../../hooks/common/useResponsive'
import { ITableColumn } from '../interfaces'
import { ICollections } from './interfaces'
import Image from 'next/image'

export const useColumns = () => {
  const { t } = useTranslation('common')
  const { isTablet } = useResponsive()

  const collectionListColumns = useMemo(
    (): ITableColumn[] => [
      {
        key: 'avatar',
        dataIndex: 'avatar',
        title: t('label.avatar'),
        align: 'left',
        hideSort: true,
        Render(data: ICollections) {
          return (
            <Flex sx={{ alignItems: 'left'}}>
              <Box sx={{ width: 88, height: 44, position: 'relative' }}>
                <Image src={data.avatar} layout='fill' />
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
        hideSort: true,
        Render(data: ICollections) {
          return (
            <Text variant='styles.table-row-text'>
              {data.collectionName}
            </Text>
          )
        }
      },
      {
        key: 'collectionAddress',
        dataIndex: 'collectionAddress',
        title: t('label.collection-address'),
        width: '20%',
        align: 'left',
        hideSort: true,
        Render(data: ICollections) {
          return (
            <Text variant='styles.table-row-text' color='green.100'>
              {data.collectionAddress}
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
        Render(data: ICollections) {
          return (
            <Text variant='styles.table-row-text'>
              {data.boundNFTName}
            </Text>
          )
        }
      },
      {
        key: 'boundNFTAddress',
        dataIndex: 'boundNFTAddress',
        title: t('label.boundnft-address'),
        align: 'left',
        hideSort: true,
        Render(data: ICollections) {
          return (
            <Text variant='styles.table-row-text' color='green.100'>
              {data.boundNFTAddress}
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
        Render(data: ICollections) {
          return (
            <Flex sx={{textAlign: 'right', justifyContent: 'right'}}>
              <Text variant='styles.table-row-text'>
                {data.totalNfts}
              </Text>
            </Flex>
          )
        }
      },
    ],
    [isTablet, t]
  )

  return {
    collectionListColumns,
  }
}
