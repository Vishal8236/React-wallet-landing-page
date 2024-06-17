import React from 'react'
import CompanyLogoImg from '../Images/Logos.png'

const CompanyLogo = () => {
  return (
    <div className='py-5 px-5'>
      <div className='border-t border-b border-[#525252]'>
        <div className='my-10'>
          <img src={CompanyLogoImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default CompanyLogo