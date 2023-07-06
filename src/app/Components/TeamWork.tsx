import React from 'react'

export default function TeamWork() {
  return (
    <div className='min-h-screen bg-slate-200 px-10 md:p-20 flex flex-col justify-start items-center w-full'>
      <h1 className='font-bold mb-4 md:mb-6 text-2xl md:text-3xl p-3'>This is an excellent place for your team to work</h1>
      <p className='text-sm mb-4 self-start md:w-3/4 p-3'>
        Workplace productivity relates to the amount of work that your staff can
        produce over a certain period. A productive workplace.
      </p>
      <div className='flex flex-col'>
        <div>
          <h1>Increase Productivity</h1>
          <span>See More</span>
        </div>
        <div>
          <h1>Enjoy your Work</h1>
          <p>
            Workplace productivity relates to the amount of work that your staff can
            produce over a certain period. A productive workplace.
          </p>
          <span>See More</span>
        </div>
        <div>
          <h1>High Speed Wifi</h1>
          <span>See More</span>
        </div>
      </div>
    </div>
  )
}
