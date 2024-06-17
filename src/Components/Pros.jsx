import React from 'react'
import CardIcon from '../Images/Icons/Cards icon.png'
import CoinIcon from '../Images/Icons/Coin icon.png'
import PurseIcon from '../Images/Icons/Purse icon.png'

const Pros = () => {
  const data = [
    {
      icon: CardIcon,
      title: 'Customizable card',
      desc: 'Custom your own card for your exact incomes and expenses needs.'
    },
    {
      icon: CoinIcon,
      title: 'No payment fee',
      desc: 'Transfer your payment all over the world with no payment fee.'
    },
    {
      icon: PurseIcon,
      title: 'All in one place',
      desc: 'The right place to keep your credit and debit cards, boarding passes & more.  '
    }
  ]
  return (
    <div className='w-full py-16 px-5'>
      <div className='grid sm:grid-cols-1 md:grid-cols-1 gap-10 lg:grid-cols-3'>
        {data.map((item,index)=>{
          return(
            <div key={index} className='flex flex-col text-center w-full'>
              <div className='flex justify-center'>
                <div className='h-10 w-10'>
                  <img src={item.icon} alt="" className='h-full w-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col space-y-3 mt-8'>
                <span className='text-white font-semibold'>{item.title}</span>
                <div className=' text-neutral-500 justify-center px-5'>{item.desc}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Pros