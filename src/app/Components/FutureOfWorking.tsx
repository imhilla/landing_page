import React from 'react'
import Image from 'next/image'
import futureOfWork from '../../../public/futureofwork.png'

export default function FutureOfWorking() {
  return (
    <div className='min-h-screen bg-white p-10 md:p-20 lg:p-20 flex flex-col md:flex-row w-full 2xl:p-40'>
      <div className='flex flex-col justify-center items-center md:w-1/2'>
        <h1 className='font-semibold mb-4 self-start text-2xl md:text-4xl'>Future of working is here</h1>
        <p className='text-sm md:pr-8'>
          Workplace productivity relates to the amount of work that your staff can
          produce over a certain period. A productive workplace more engaged employees and
          improved performance metrics.
        </p>
        <div className='grid grid-cols-2 mt-4  gap-5 md:gap-9 md:mt-8 md:self-start'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-orange-600 text-4xl font-semibold'>1.5M</h1>
            <h1 className='text-center text-sm mt-4'>Active Customers</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-blue-600 text-4xl font-semibold'>4.8/5</h1>
            <h1 className='text-center text-sm mt-4'>Ratings on TrustPilot</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-violet-900 text-4xl font-semibold'>45+</h1>
            <h1 className='text-center text-sm mt-4'>Reading Room</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-rose-600 text-4xl font-semibold'>120+</h1>
            <h1 className='text-center text-sm mt-4'>Event Space</h1>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center'>
        <Image
          className='mb-0 mt-8 md:mb-0'
          src={futureOfWork}
          alt="Close Nav Bar"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  )
}
