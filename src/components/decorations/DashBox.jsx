// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const DashBox = ({customStyles}) => {
  return (
    <div className={"w-[100px] h-[8px] bg-[#ff0000] absolute bottom-[18px]  " + customStyles}></div>
  )
}

export default DashBox