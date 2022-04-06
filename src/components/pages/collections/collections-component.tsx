import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "theme-ui";
import { BAYC_IMAGE_PATH, PUNK_IMAGE_PATH } from "../../../constants";
import Container from "../../../theme/common/container";
import Table from "../../common/table";
import { useColumns } from "../../common/table/columns";
import { ICollections } from "../../common/table/columns/interfaces";
import { MotionFlex, MotionText } from "../../motion-components";


export const CollectionsPageComponent: React.FC = () => {
  const { t } = useTranslation('common')
  const { collectionListColumns } = useColumns()

  const rows = useMemo((): ICollections[] => [
    {
      key: 'punks',
      avatar: PUNK_IMAGE_PATH,
      collectionName: 'cryptopunks',
      collectionAddress: '0xc1c2c3...c7c8c9',
      boundNFTName: 'BOUNDWPUNKS',
      boundNFTAddress: '0xc1c2c3...c7c8c9',
      totalNfts: 123,
    },
    {
      key: 'bayc',
      avatar: BAYC_IMAGE_PATH,
      collectionName: 'bayc',
      collectionAddress: '0xc1c2c3...c7c8c9',
      boundNFTName: 'BOUNDWPUNKS',
      boundNFTAddress: '0xc1c2c3...c7c8c9',
      totalNfts: 234,
    }

  ], [])

  return (
    <Container 
      sx={{
      pt: 90,
      pb: 380,
      width: '100%', 
      flexDirection: 'column', 
      alignItems: 'center',
      overflow: 'hidden',
      }}>
      <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center'}}>
        <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MotionText variant='styles.title-white'>{t('label.list-of').toUpperCase()}</MotionText>
          <MotionText variant='styles.title-bold-green'>{t('label.collections').toUpperCase()}</MotionText>
        </MotionFlex>

        <MotionText variant='styles.body' color='white' sx={{ mt: 16}}>
          {t('label.nft-collections-support')}
        </MotionText>

      <Flex mt={80}>
        <Table
          columns={collectionListColumns ? collectionListColumns : []}
          dataSource={rows ? rows :  []}
          loading={false}
          mobile
          //mobileHasButtons={mobileHasButtons}
          //loadingNumRows={loadingNumRows}
        
          //tabletHasTable={tabletHasTable}
          //noRecords={noRecords}
        />

        
      </Flex>



        

      </MotionFlex>
    </Container>
  )

}


