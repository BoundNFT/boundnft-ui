import React from 'react'

interface IIcon {
  color?: string
  size?: number
}

const IconWallet = React.forwardRef<SVGSVGElement, IIcon>(({ color = 'currentColor', size = 20, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 20 20'
      fill={color}
      stroke={color}
      strokeWidth='0.0'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...rest}
    >
      <g id='wallet'>
        <path
          fill={color}
          stroke={color}
          strokeWidth='0.0'
          d='M3.8,4.9c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h13.4V0.7H3.8c-1.7,0-3.1,1.4-3.1,3.1c0,0,0,0,0,0c0,0,0,0.1,0,0.1v12.2
        c0,1.7,1.4,3.1,3.1,3.1l12.3,0c1.7,0,3.1-1.4,3.1-3.1c0,0,0,0,0,0V4.9H3.8z M16.2,17.2C16.2,17.2,16.2,17.2,16.2,17.2l-12.3,0
        c-0.6,0-1-0.5-1-1V6.7c0.3,0.1,0.7,0.2,1,0.2h13.4v2.3h-1.9c-1.6,0-2.9,1.3-2.9,2.9c0,1.6,1.3,2.9,2.9,2.9h1.9v1.1
        C17.2,16.8,16.7,17.2,16.2,17.2z M17.2,11.2v2h-1.9c-0.5,0-1-0.4-1-0.9c0-0.5,0.4-1,0.9-1c0,0,0,0,0.1,0v0H17.2z'
        />
      </g>
    </svg>
  )
})

export default IconWallet
