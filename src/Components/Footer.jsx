import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-primary px-5'>
      <div className='max-w-5xl mx-auto border-t border-[#525252]'>
        <div className='py-5'>
          <div className=''>
            <div>
              <span className='text-white font-semibold text-xl'>Wallet</span>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-6 lg:mt-0'>
              <div className='order-2 flex flex-col lg:flex-row space-y-6 lg:space-x-6 text-white font-semibold items-start lg:items-end mt-6 lg:mt-0'>
                <span>Wallet 2022</span>
                <span>Privacy policy</span>
                <span>Cookies policy</span>
                <span>Terms of use</span>
              </div>
              <div className='flex justify-end order-1'>
                <div className='w-full'>
                  <span className='text-white'>Updates right to your Inbox</span>
                  <div className='flex space-y-5 lg:space-x-5 mt-2 flex-col lg:flex-row'>
                    <input type="text" placeholder='Email Address' 
                      className='w-full lg:w-min px-4 py-2 outline-none rounded-lg bg-[#333333] text-neutral-500' />

                    <button className=' bg-nav-btn text-black border-none rounded-lg text-sm w-full lg:w-28 py-2'>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer