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
        mt: -500, 
        height: 500
      }}>
      <Flex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column', alignItems: 'center'}}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center', mb: 100}}>
          <Image src='/assets/images/boundnft_logo.svg' width={88} height={70} />
          <Flex>
            <Text variant='styles.semi-title-white'>{t('label.bound').toUpperCase()}</Text>
            <Text variant='styles.semi-title-bold-white'>{t('label.nft').toUpperCase()}</Text>
          </Flex>
        </Flex>
        <Flex sx={{ width: '100%', flex: 1, justifyContent: 'flex-start'}}>
          <Flex sx={{ flexDirection: 'column', flex: 0.5}}>
            <Text variant='styles.mid-title-white'>{t('label.the-protocol').toUpperCase()}</Text>
            <Text variant='styles.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25}}>
              {t('paragraph.footer-1')}
            </Text>
          </Flex>

          <Flex sx={{ flexDirection: 'column', flex: 0.25}}>
            <Text variant='styles.mid-title-white'>ABOUT</Text>
            <Flex variant='styles.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25, flexDirection: 'column'}}>
              <Link>{t('label.twitter')}</Link>
              <Link>{t('label.discord')}</Link>
              <Link>{t('label.github')}</Link>
            </Flex>
          </Flex>

          <Flex sx={{ flexDirection: 'column', flex: 0.25}}>
            <Text variant='styles.mid-title-white'>{t('label.community')}</Text>
            <Flex variant='styles.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25, flexDirection: 'column'}}>
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