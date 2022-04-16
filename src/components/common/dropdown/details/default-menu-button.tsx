
import { MotionButton } from 'components/common/motion-components'
import { motion } from 'framer-motion'

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='3'
    stroke='currentColor'
    strokeLinecap='round'
    {...props}
  />
)

export const DefaultMenuButton: React.FC<any> = ({ onClick, isOpen }) => {
  return (
      <MotionButton
        sx={{
          alignItems: 'center',
          color: 'black',
          cursor: 'pointer',
          display: 'flex',
          height: '3rem',
          width: '3rem',
          paddingLeft: '10px',
          paddingRight: '10px',
          justifyContent: 'center',
          outline: 'none',
          userSelect: 'none',
          borderRadius: 0,
        }}
        onClick={onClick}
        animate={isOpen ? 'open' : 'closed'}
        initial={false}
      >
        <svg
          width='33'
          height='33'
          viewBox='0 0 20 20'
        >
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' }
            }}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' }
            }}
          />
        </svg>
      </MotionButton>
  )
}

