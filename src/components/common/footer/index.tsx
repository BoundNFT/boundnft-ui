import { Flex, Link, Text } from 'theme-ui'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { rgba } from 'polished'


export const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  return (
    <Flex
      sx={{
        width: '100%', 
        flexDirection: 'column', 
        alignItems: 'center',
        background: 'url(/assets/images/bg/bg-main-02.png)',
        backgroundPositionY: '0%',
        backGroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        pt: 400,
        mt: -200
      }}
    >
      <Flex 
        sx={{ 
          position: 'relative',
          width: '100%', 
          alignItems: 'center', 
          justifyContent: 'center', 
          backgroundColor: rgba(6, 10, 16, 0.3),        
          height: [760, 760, 500],
          px: [20, 20, 40, 40, null],
        }}>
        <Flex sx={{ maxWidth: 960, width: '100%', flexDirection: 'column', alignItems: 'center'}}>
          <Flex sx={{ flexDirection: 'column', alignItems: 'center'}}>
            <Image src='/assets/images/boundnft_logo.svg' width={88} height={70} />
            <Flex sx={{mt: 25}}>
              <Text variant='text.semi-title-white'>{t('label.bound').toUpperCase()}</Text>
              <Text variant='text.semi-title-bold-white'>{t('label.nft').toUpperCase()}</Text>
            </Flex>
          </Flex>
          <Flex sx={{ mt: [40, 40, 40, 70], width: '100%', flex: 1, justifyContent: 'flex-start', flexDirection: ['column', 'column', 'row']}}>
            <Flex sx={{ flexDirection: 'column', lineHeight: 2, flex: [1, 1, 0.5]}}>
              <Text variant='text.mid-title-white'>{t('label.the-protocol').toUpperCase()}</Text>
              <Text variant='text.body-xs' color='grey.100' sx={{ maxWidth: 400, mt: 25}}>
                {t('paragraph.footer-1')}
              </Text>
            </Flex>

            <Flex sx={{ flexDirection: 'column', flex: [1, 1, 0.25], lineHeight: 2, mt: [30, 30, 0]}}>
              <Text variant='text.mid-title-white'>{t('label.about')}</Text>
              <Flex variant='text.body-xs' color='grey.100' sx={{ maxWidth: 400, lineHeight: '25px', mt: 25, flexDirection: 'column'}}>
                <Link>{t('label.twitter')}</Link>
                <Link>{t('label.discord')}</Link>
                <Link>{t('label.github')}</Link>
              </Flex>
            </Flex>

            <Flex sx={{ flexDirection: 'column', flex: [1, 1, 0.25], lineHeight: 2, mt: [30, 30, 0]}}>
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
    </Flex>



  )
}