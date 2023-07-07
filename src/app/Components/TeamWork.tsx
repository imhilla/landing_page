import React from 'react'
import Image from 'next/image'
import TeamOne from '../../../public/team_img1.jpg'
import TeamTwo from '../../../public/team_img2.jpg'
import TeamThree from '../../../public/team_img3.jpg'

export default function TeamWork() {
  return (
    <div className='min-h-screen bg-slate-200 p-10 md:p-20 flex flex-col justify-center items-center w-full lg:p-20'>
      <h1 className='font-semibold mb-4 text-2xl md:text-4xl'>This is an excellent place for your team to work</h1>
      <p className='text-sm mb-4 self-start md:self-center md:text-center md:w-1/2 md:py-3'>
        Workplace productivity relates to the amount of work that your staff can
        produce over a certain period. A productive workplace.
      </p>
      <div className='grid grid-cols-1 gap-5 md:flex'>
        <div className='w-full bg-white p-4 rounded md:h-1/5'>
          <Image
            className='mb-4 rounded'
            src={TeamOne}
            alt="Close Nav Bar"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h1 className='font-semibold text-lg'>Increase Productivity</h1>
          <h1 className='text-xs mt-2 hover:cursor-pointer text-blue-600'>See More</h1>
        </div>

        <div className='w-full bg-white p-4 rounded'>
          <Image
            className='mb-4 rounded'
            src={TeamTwo}
            alt="Close Nav Bar"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h1 className='font-semibold text-lg'>Enjoy your Work</h1>
          <p className='text-sm mt-2'>
            Workplace productivity relates to the amount of work that your staff can
            produce over a certain period. A productive workplace.
          </p>
          <span className='text-xs mt-2 hover:cursor-pointer text-blue-600'>See More</span>
        </div>

        <div className='w-full bg-white p-4 rounded md:h-1/5'>
          <Image
            className='mb-4 rounded'
            src={TeamThree}
            alt="Close Nav Bar"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
          <h1 className='font-semibold text-lg'>High Speed Wifi</h1>
          <span className='text-xs mt-2 hover:cursor-pointer text-blue-600'>See More</span>
        </div>
      </div>
    </div>
  )
}
