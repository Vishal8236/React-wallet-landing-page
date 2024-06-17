import React from 'react'
import QuestionTalkImg from '../Images/GIF.png'
const QuestionTalk = () => {
  return (
    <div className='w-full py-16 px-5'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
				<div className='w-full text-center lg:text-left'>
					<div className='text-5xl sm:w-full lg:text-6xl font-semibold text-white'>
            Questions? 
            Let’s talk 
					</div>
					<div className='mt-8'>
						<span className='text-neutral-500 px-3 lg:px-0'>
						Contact us through our 24/7 live chat. We’re always happy to help!
						</span>
					</div>
					<div className='mt-8'>
						<button className=' bg-[#F8D57E] text-black border-none rounded-lg text-sm w-28 py-2'>
              Get Started
            </button>
					</div>
				</div>
				<div className=''>
					<div className=' bg-[#333333] rounded-lg flex justify-center'>
						<img src={QuestionTalkImg} alt="" />
					</div>
				</div>
			</div>
    </div>
  )
}

export default QuestionTalk