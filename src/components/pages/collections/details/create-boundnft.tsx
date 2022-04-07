import { useTranslation } from 'react-i18next'
import { Box, Text, Input, Label, Flex } from 'theme-ui'
import { Button } from '../../../../theme/ui/common/button'
import { MotionFlex, MotionText } from '../../../common/motion-components'


export const CreateBounftNFT: React.FC = () => {
  const { t } = useTranslation('common')
  return (

    <MotionFlex 
      sx={{
      width: '100%', 
      flexDirection: 'column', 
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <MotionFlex sx={{ width: '100%', maxWidth: 960, flexDirection: 'column', alignitems: 'center'}}>
        <MotionFlex sx={{ width: '100%', flexDirection: 'column', fontSize: 'xxxl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <MotionText variant='styles.title-white'>{t('label.create').toUpperCase()}</MotionText>
          <MotionText variant='styles.title-bold-green'>{t('label.new-boundnft').toUpperCase()}</MotionText>
        </MotionFlex>

        <MotionText variant='styles.body' color='white' sx={{ mt: 16}}>
          {t('label.nft-collection-create')}
        </MotionText>

        <Box variant='frames.normal' sx={{mt: 80}}>
          <Box as='form'sx={{width: '100%'}}>
            <Label sx={{mb: 20}} variant='styles.body-xs' color='grey.100' htmlFor='username'>{t('label.contract-address')}</Label>
            <Input
              
            />
            <Label sx={{mt: 20}} variant='styles.body-xs' color='grey.100' htmlFor='password'>{t('label.input-notice')}</Label>
          </Box>
        </Box>

        <Box variant='frames.normal' sx={{textAlign: 'center', mt: 40}}>
          <Text as='span' variant='styles.body' sx={{ color: 'white', lineHeight: 1.5}} dangerouslySetInnerHTML={{ __html: t('paragraph.create-boundnft-step1')}}/>
        </Box>

        <Flex sx={{ width: '100%', mt: 40, alignItems: ['center', 'center', 'center', null], justifyContent: ['space-between'], flexDirection: ['column', 'column', 'column', 'row']}}>
          <Button text={t('button.create-new-boundnft').toUpperCase()} backgroundColor='green.100' arrowColor='black' />
          <Button text={t('button.use-existing-boundnft').toUpperCase()} outlined sx={{ mt: [20, 20, 20, 0]}}/>
        </Flex>

      </MotionFlex>

    </MotionFlex>


  )
}