import React from 'react'
import Image from 'next/image'

export default function TeamWork() {
  return (
    <div className='min-h-screen bg-slate-200 px-10 md:p-20 flex flex-col justify-center items-center w-full py-10'>
      <h1 className='font-bold mb-4 md:mb-6 text-2xl md:text-3xl md:w-1/2 md:text-center'>This is an excellent place for your team to work</h1>
      <p className='text-sm mb-4 self-start md:self-center md:text-center md:w-1/2 md:py-3'>
        Workplace productivity relates to the amount of work that your staff can
        produce over a certain period. A productive workplace.
      </p>
      <div className='grid grid-cols-1 gap-5 md:flex'>
        <div className='w-full bg-white p-2 rounded md:h-1/5'>
          <Image
            className='mb-4 rounded'
            src={require('./../../../public/team_img1.jpg')}
            alt="Close Nav Bar"
            height={300}
          // width={300}
          />
          <h1 className='font-semibold text-sm'>Increase Productivity</h1>
          <h1 className='text-xs mt-2'>See More</h1>
        </div>

        <div className='w-full bg-white p-2 rounded'>
          <Image
            className='mb-4 rounded'
            src={require('./../../../public/team_img2.jpg')}
            alt="Close Nav Bar"
          // height={300}
          // width={100}
          />
          <h1 className='font-semibold text-sm'>Enjoy your Work</h1>
          <p className='text-sm mt-2'>
            Workplace productivity relates to the amount of work that your staff can
            produce over a certain period. A productive workplace.
          </p>
          <span className='text-xs mt-2'>See More</span>
        </div>

        <div className='w-full bg-white p-2 rounded md:h-1/5'>
          <Image
            className='mb-4 rounded'
            src={require('./../../../public/team_img3.jpg')}
            alt="Close Nav Bar"
            height={300}
          // width={300}
          />
          <h1 className='font-semibold text-sm'>High Speed Wifi</h1>
          <span className='text-xs mt-2'>See More</span>
        </div>
      </div>
    </div>
  )
}
