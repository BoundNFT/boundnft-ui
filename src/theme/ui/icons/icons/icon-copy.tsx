import React from 'react'

interface IIconCopy {
  color?: string
}

const IconCopy = React.forwardRef<SVGSVGElement, IIconCopy>(({ color = 'currentColor', ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns='http://www.w3.org/2000/svg'
      width={12}
      height={15}
      viewBox='0 0 12 15'
      fill={color}
      stroke={color}
      {...rest}
    >
      <g id='copy' transform='translate(1.174 0.175)'>
        <path
          id='Shape'
          d='M8.828,15H.98A.975.975,0,0,1,0,14.032V2.709a.98.98,0,0,1,.98-.978h1.9V.973A.982.982,0,0,1,3.873,0h3.8a.98.98,0,0,1,.393.084L8.078.09l.008,0L8.1.1l.014.007.045.024a1.179,1.179,0,0,1,.2.155L11.25,3.215a.974.974,0,0,1,.275.685v7.241a.956.956,0,0,1-.96.973H9.8v1.917A.957.957,0,0,1,8.828,15ZM.973,2.705V14.027H8.82V12.116H3.872a.982.982,0,0,1-.988-.974V2.705ZM3.858.974V11.142h6.693V5.481H7.032a.982.982,0,0,1-.988-.973V.974ZM7.025.613h0V4.507H10.9Z'
          transform='translate(-0.999 0)'
          fill={color}
          stroke={color}
          strokeWidth='0.35'
        />
      </g>
    </svg>
  )
})

export default IconCopy
