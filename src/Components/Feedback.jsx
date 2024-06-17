import React from 'react'
import { FaStar } from "react-icons/fa";

const Feedback = () => {
  return (
    <div className='w-full py-5 px-5'>
      <div className='h-72 bg-[#BFAFF2] w-full rounded-lg'>
        <div className='flex items-center h-full max-w-2xl mx-auto px-5 lg:px-0'>
          <div className='flex flex-col space-y-8 w-full'>
            <div className='font-semibold text-lg lg:text-xl'>
              “Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”
            </div>
            <div className='flex items-center space-x-5'>
              <div className='h-12 w-12'>
                <img className='shadow-md h-full w-full object-cover rounded-full' src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              </div>
              <div className='flex flex-col space-y-1'>
                <span className='text-[#2B2B2B] text-sm'>Vishal Patidar</span>
                <div className='flex space-x-1.5'>
                  {Array.from({length: 5}, (index)=>{
                    return(
                      <span key={index}>
                        <FaStar color='black' size={15} />
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback