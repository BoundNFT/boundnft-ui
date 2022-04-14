import { motion, MotionProps } from 'framer-motion'
import { Flex, FlexProps, Box, BoxProps, Grid, GridProps, Button, ButtonProps, Text, TextProps, Container, ContainerProps } from 'theme-ui'

const MotionContainer = motion(Container)
export type MotionContainerProps = ContainerProps & MotionProps

const MotionBox = motion(Box)
export type MotionBoxProps = BoxProps & MotionProps

const MotionFlex = motion(Flex)
export type MotionFlexProps = FlexProps & MotionProps

const MotionGrid = motion(Grid)
export type MotionGridProps = GridProps & MotionProps

const MotionButton = motion(Button)
export type MotionButtonProps = ButtonProps & MotionProps

const MotionText = motion(Text)
export type MotionTextProps = TextProps & MotionProps

export { MotionContainer, MotionBox, MotionGrid, MotionFlex, MotionText, MotionButton }
