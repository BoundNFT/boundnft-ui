import { Flex, Link, Text } from 'theme-ui'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'


export const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Flex 
      sx={{ 
        position: 'relative',
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'blue.200', 
        opacity: 0.8, 
        mt: [-660, -700, -500], 
        height: [660, 700, 500],
        px: [20, 20, 40, 40, null],
        pt: [40, 40, 0],
        pb: [60]
      
      }}>
      <Flex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column', alignItems: 'center'}}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center'}}>
          <Image src='/assets/images/boundnft_logo.svg' width={88} height={70} />
          <Flex>
            <Text variant='text.semi-title-white'>{t('label.bound').toUpperCase()}</Text>
            <Text variant='text.semi-title-bold-white'>{t('label.nft').toUpperCase()}</Text>
          </Flex>
        </Flex>
        <Flex sx={{ mt: [40, 40, 40, 70], width: '100%', flex: 1, justifyContent: 'flex-start', flexDirection: ['column', 'column', 'row']}}>
          <Flex sx={{ flexDirection: 'column', flex: [1, 1, 0.5]}}>
            <Text variant='text.mid-title-white'>{t('label.the-protocol').toUpperCase()}</Text>
            <Text variant='text.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25}}>
              {t('paragraph.footer-1')}
            </Text>
          </Flex>

          <Flex sx={{ flexDirection: 'column', flex: [1, 1, 0.25], mt: [30, 30, 0]}}>
            <Text variant='text.mid-title-white'>{t('label.about')}</Text>
            <Flex variant='text.body-xs' color='grey.100' sx={{ maxWidth: 400, lineHeight: '25px', mt: 25, flexDirection: 'column'}}>
              <Link>{t('label.twitter')}</Link>
              <Link>{t('label.discord')}</Link>
              <Link>{t('label.github')}</Link>
            </Flex>
          </Flex>

          <Flex sx={{ flexDirection: 'column', flex: [1, 1, 0.25], mt: [30, 30, 0]}}>
            <Text variant='text.mid-title-white'>{t('label.community')}</Text>
            <Flex variant='text.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25, lineHeight: '25px', flexDirection: 'column'}}>
              <Link>{t('label.about')}</Link>
              <Link>{t('label.contract')}</Link>
              <Link>{t('label.platform')}</Link>
            </Flex>
          </Flex>
        </Flex>

      </Flex>
    </Flex>



  )
}