import React from 'react'
import Header from './Header'

export default function TopSection() {
  return (
    <div className='min-h-screen bg-white '>
      <Header />
      <div className='flex flex-col p-10 md:p-20 2xl:p-40'>
        <div className='flex flex-col'>
          <h1 className='font-bold mb-4 self-start text-2xl md:text-5xl'>Find A Comfortable Worlplace</h1>
          <p className='text-sm '>
            From costs savings to increased collaboration opportunities,
            coworking spaces can make for ideal offices, especially for small and growing businesses.
          </p>
          <button
            style={{ backgroundColor: '#161d49' }}
            className='self-start py-3 text-white text-sm font-semibold px-5 mb-4 rounded mt-4'>
            Get In Touch
          </button>
          <div>

          </div>
        </div>
        <div>
          image
        </div>
      </div>
    </div>
  )
}
