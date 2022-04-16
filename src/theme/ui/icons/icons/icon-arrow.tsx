import React from 'react'

interface IIconArrow {
  color?: string
  size?: number
}

const IconArrow = React.forwardRef<SVGSVGElement, IIconArrow>(({ color = 'currentColor' }) => {
  return (

    <svg xmlns='http://www.w3.org/2000/svg' width='30.507' height='20.044' viewBox='0 0 30.507 12.044'>
      <defs>
        <clipPath id='clip-path'>
          <rect id='Rectangle_15' data-name='Rectangle 15' width='30.507' height='12.044' transform='translate(0 0)' fill={color}/>
        </clipPath>
      </defs>
      <g id='Group_16' data-name='Group 16' transform='translate(0 0)'>
        <g id='Group_15' data-name='Group 15' clip-path='url(#clip-path)'>
          <path id='Path_18' data-name='Path 18' d='M30.125,5.115,25.162.345A1.245,1.245,0,0,0,23.4.383a1.245,1.245,0,0,0,.037,1.758L26.188,4.78,1.2,4.782A1.242,1.242,0,0,0,1.24,7.266H26.164L23.415,9.909a1.241,1.241,0,0,0,.837,2.135h.024a1.233,1.233,0,0,0,.86-.347l5.025-4.83a1.24,1.24,0,0,0-.036-1.753' fill={color}/>
        </g>
      </g>
    </svg>

  )
})

export default IconArrow
