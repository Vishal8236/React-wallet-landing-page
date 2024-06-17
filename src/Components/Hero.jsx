import React from 'react'
import HeroImage from '../Images/Screenshot.png'

const Hero = () => {
  return (
    <div className='w-full py-16 px-5'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
				<div className='w-full text-center lg:text-left'>
					<div className='text-5xl sm:w-full lg:text-6xl font-semibold text-white'>
						SaaS Landing Page Template
					</div>
					<div className='mt-8'>
						<span className='text-neutral-500 px-3 lg:px-0'>
						This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com
						</span>
					</div>
					<div className='mt-16'>
						<button className=' bg-[#F8D57E] text-black border-none rounded-lg text-sm w-28 py-2'>
              Get Started
            </button>
					</div>
				</div>
				<div className=''>
					<div className=' bg-[#333333] rounded-lg flex justify-center'>
						<img src={HeroImage} alt="" />
					</div>
				</div>
			</div>
    </div>
  )
}

export default Hero