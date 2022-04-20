import { useTranslation } from 'react-i18next'
import { Flex } from 'theme-ui'
import Table from '../../common/table'
import { useColumns } from '../../common/table/columns'
import { MotionFlex, MotionText } from '../../common/motion-components'
import { Button } from '../../../theme/ui/common/button'
import { permalink } from '../../../constants/routes'
import { mainContainer } from './details/motion-containers'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getBnftCollections } from 'utils/api/get-bnft-collections'
import { AnimatePresence } from 'framer-motion'

const Collections: React.FC = () => {
  const { t } = useTranslation('common')
  const { collectionListColumns } = useColumns()
  const router = useRouter()
  const { data, isLoading, isIdle } = useQuery(['Get BNFT collections'], async () => getBnftCollections())

  return (
    <Flex
      sx={{
        px: [20, 20, 20, 40, 0],
        pt: 170,
        pb: 200,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      <MotionFlex
        variants={mainContainer}
        initial={'hidden'}
        animate='visible'
        sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center' }}
      >
        <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl' }}>
          <MotionText variant='text.title-white'>{t('label.list-of').toUpperCase()}</MotionText>
          <MotionText variant='text.title-bold-green'>{t('label.collections').toUpperCase()}</MotionText>
        </MotionFlex>

        <MotionText variant='text.body' color='white' sx={{ mt: 16 }}>
          {t('label.nft-collections-support')}
        </MotionText>

        <AnimatePresence>
          {data && (
            <MotionFlex animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }} initial={{ opacity: 0, y: 10 }} sx={{ width: '100%', mt: 80 }}>
              <Table columns={collectionListColumns ? collectionListColumns : []} dataSource={data ? data : []} loading={isLoading || isIdle} />
            </MotionFlex>
          )}
        </AnimatePresence>

        <Flex
          sx={{
            width: '100%',
            mt: 70,
            alignItems: ['center', 'center', 'center', null],
            justifyContent: ['space-between'],
            flexDirection: ['column', 'column', 'column', 'row', 'row']
          }}
        >
          <Button text={t('button.create-new-boundnft').toUpperCase()} backgroundColor='green.100' onClick={() => router.push(permalink.createBoundNFT)} />
          <Button
            text={t('button.use-existing-boundnft').toUpperCase()}
            outlined
            sx={{ mt: [20, 20, 20, 0] }}
            onClick={() => router.push(permalink.createBoundNFT)}
          />
        </Flex>
      </MotionFlex>
    </Flex>
  )
}

export default Collections
