import { Box, Switch, Text } from 'theme-ui'
import { MotionContainer } from './motion-components'

export default function About () {
  return (
    <MotionContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Text as='h1' sx={{ my: 40 }}>Hello!</Text>
      <Box sx={{ my: 40 }}>
        Lorem ipsum :)
      </Box>
      <Switch label="@theme-ui/components work seamlessly" />
    </MotionContainer>
  )
}


