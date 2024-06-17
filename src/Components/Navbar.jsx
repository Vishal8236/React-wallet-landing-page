import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-primary h-16'>
      <div className='max-w-5xl mx-auto h-full flex items-center px-5'>
        <div className='flex justify-between w-full items-center'>
          <span className='text-white font-semibold text-xl lg:text-2xl'>Wallet</span>
          <div className='flex space-x-6 lg:space-x-8 items-center'>
            <span className='text-white font-light'>Sign up</span>
            <button className=' bg-nav-btn text-black border-none rounded-lg text-sm w-20 lg:w-28 py-2'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar