import React from 'react'
import DashboardImage from '../Images/Image.png'
const DashboardImg = () => {
  return (
    <div className='w-full py-16 px-5'>
      <div className='bg-[#FDF5DF] rounded-lg flex justify-center'>
        <img src={DashboardImage} alt="" />
      </div>
    </div>
  )
}

export default DashboardImg