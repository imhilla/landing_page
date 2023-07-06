import React from 'react'

export default function FutureOfWorking() {
  return (
    <div className='min-h-screen bg-white p-10 flex flex-col'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold mb-4 self-start'>Future of working is here</h1>
        <p className='text-sm mb-4 self-start'>
          Workplace productivity relates to the amount of work that your staff can
          produce over a certain period. A productive workplace more engaged employees and
          improved performance metrics.
        </p>
        <div className='grid grid-cols-2 gap-5'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-orange-600 text-4xl'>1.5M</h1>
            <h1 className='text-center text-sm mt-4'>Active Customers</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-blue-600 text-4xl'>4.8/5</h1>
            <h1 className='text-center text-sm mt-4'>Ratings on TrustPilot</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-violet-900 text-4xl'>45+</h1>
            <h1 className='text-center text-sm mt-4'>Reading Room</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-rose-600 text-4xl'>120+</h1>
            <h1 className='text-center text-sm mt-4'>Event Space</h1>
          </div>
        </div>
      </div>
      <div>
        image
      </div>
    </div>
  )
}
