'use client'
import React from 'react'
import Image from 'next/image';
import WifiImage from '../../../public/wifi.png'
import Clock from '../../../public/clock.png'
import Location from '../../../public/location.png'
import Mug from '../../../public/mug.png'
export default function ModernConviniences() {
  return (
    <div className='min-h-screen bg-white p-10 md:p-20 lg:p-20 2xl:p-40 flex flex-col justify-center items-center w-full'>
      <div className='w-full lg:h-3/4 flex flex-col justify-between items-center'>
        <h1 className='w-full flex flex-col items-center justify-center'>
          <h1 className='font-semibold mb-4 md:w-3/6 text-center text-2xl md:text-4xl'>The modern conviniences of this</h1>
          <h1 className='font-semibold mb-4 md:w-3/6 text-center text-2xl md:text-4xl leading-3'>co-working place</h1>
        </h1>
        <div className='w-full grid gap-5 grid-cols-1 md:flex mt-4 md:mt-8'>
          <div className='w-full md:w-2/4 bg-slate-100 lg:h-1/2 p-8 rounded flex flex-col justify-center items-center shadow-lg hover:bg-white transition duration-150 ease-in-out'>
            <div className='w-1/3'>
              <Image
                className='mb-4'
                src={WifiImage}
                alt="wifi image"
                style={{
                  width: '80%',
                  height: 'auto',
                }}
                unoptimized={true}
              />
            </div>
            <h1 className='font-semibold my-4'>Hight Speed Wifi</h1>
            <p className='text-center text-sm'>
              The network connection in our space is always active so that there
              is no curb in work
            </p>
          </div>

          <div className='w-full md:w-2/4 bg-slate-100 rounded lg:h-1/2 p-8 flex flex-col justify-center items-center shadow-lg hover:bg-white transition duration-150 ease-in-out'>
            <div className='w-1/3'>
              <Image
                className='mb-4'
                src={Clock}
                unoptimized
                alt="wifi image"
                style={{
                  width: '80%',
                  height: 'auto',
                }}
              />
            </div>
            <h1 className='font-semibold my-4'>24/7 Internet Access</h1>
            <p className='text-center text-sm'>
              The network connection in our space is always active so that there
              is no curb in work
            </p>
          </div>

          <div className='w-full md:w-2/4 bg-slate-100 rounded lg:h-1/2 p-8 flex flex-col justify-center items-center shadow-lg hover:bg-white transition duration-150 ease-in-out'>
            <div className='w-1/3'>
              <Image
                className='mb-4'
                src={Location}
                unoptimized
                alt="wifi image"
                style={{
                  width: '80%',
                  height: 'auto',
                }}
              />
            </div>
            <h1 className='font-semibold my-4'>Great Location</h1>
            <p className='text-center text-sm'>
              The network connection in our space is always active so that there
              is no curb in work
            </p>
          </div>

          <div className='w-full md:w-2/4 bg-slate-100 rounded lg:h-1/2 p-8 flex flex-col justify-center items-center shadow-lg hover:bg-white transition duration-150 ease-in-out'>
            <div className='w-1/3'>
              <Image
                className='mb-4'
                src={Mug}
                alt="wifi image"
                unoptimized
                style={{
                  width: '80%',
                  height: 'auto',
                }}
              />
            </div>
            <h1 className='font-semibold my-4'>Free Coffee and Tea</h1>
            <p className='text-center text-sm'>
              The network connection in our space is always active so that there
              is no curb in work
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
