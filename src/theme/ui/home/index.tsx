import React from 'react'
import Head from 'next/head'
// Components
import { Flex, FlexProps } from 'rebass/styled-components'

interface IMain extends FlexProps {
  children?: React.ReactNode
  title?: string
  description?: any
  url?: string
  image?: string
}

const Main: React.FC<IMain> = ({ children, title = '', description = '', url = '', image = '', ...restprops }): React.ReactElement => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        <meta name='title' content={title} />
        <meta name='description' content={description} />

        <meta property='og:type' content='website' />
        <meta property='og:url' content={url} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={image} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={url} />
        <meta property='twitter:title' content={title} />
        <meta property='twitter:description' content={description} />
        <meta property='twitter:image' content={image} />
      </Head>
      <Flex height={['auto']} flexDirection='column'>
        <Flex flexDirection='column' alignItems='center' width={['100%']} {...restprops}>
          {children}
        </Flex>
      </Flex>
    </>
  )
}

export default Main
