import React from 'react'

import useTheme from 'hooks/common/useTheme'
import useCopyClipboard from 'hooks/common/useCopyClipboard'
import { Button, Flex } from 'theme-ui'
import { IconCopy } from 'theme/ui/icons'

interface CopyHelperProps {
  toCopy: string
  hasIconOnCopy?: boolean
}

const CopyHelper: React.FC<CopyHelperProps> = ({ toCopy, children, ...restprops }) => {
  const [isCopied, setCopied] = useCopyClipboard()
  const { colors } = useTheme()

  return (
    <Button onClick={() => setCopied(toCopy)} {...restprops}>
      <Flex sx={{ flexDirection: 'row', alignItems: 'center' }}>
        <Flex sx={{ alignItems: 'center' }}>
          <Flex sx={{ mr: '5px', mt: '2px' }}>{children} </Flex>
          {!isCopied && <IconCopy color={colors.blue[100]} />}
          {isCopied && <IconCopy color={colors.accent} />}
        </Flex>
      </Flex>
    </Button>
  )
}

export default CopyHelper
