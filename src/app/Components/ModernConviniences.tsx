'use client'
import React from 'react'
import WifiIcon from '@mui/icons-material/Wifi';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CoffeeIcon from '@mui/icons-material/Coffee';

export default function ModernConviniences() {
  return (
    <div className='min-h-screen bg-white px-10 md:py-28 md:px-20 flex flex-col justify-center items-center w-full'>
      <h1 className='font-semibold mb-4 md:w-1/2 text-center text-2xl md:text-4xl'>The modern conviniences of this co-working place</h1>
      <div className='w-full grid gap-5 grid-cols-1 md:flex mt-4'>
        <div className='w-full bg-slate-100 rounded p-10  flex flex-col justify-center items-center shadow-md hover:bg-white'>
          <span className='my-6'>
            <WifiIcon className='text-4xl' />
          </span>
          <h1 className='font-semibold mb-4'>Hight Speed Wifi</h1>
          <p className='text-center text-sm'>
            The network connection in our space is always active so that there
            is no curb in work
          </p>
        </div>

        <div className='w-full bg-slate-100 rounded p-10 flex flex-col justify-center items-center shadow-md hover:bg-white'>
          <span className='my-6'>
            <AccessTimeIcon className='text-4xl' />
          </span>
          <h1 className='font-semibold mb-4'>Hight Speed Wifi</h1>
          <p className='text-center text-sm'>
            The network connection in our space is always active so that there
            is no curb in work
          </p>
        </div>

        <div className='w-full bg-slate-100 rounded p-10 flex flex-col justify-center items-center shadow-md hover:bg-white'>
          <span className='my-6'>
            <LocationOnIcon className='text-4xl' />
          </span>
          <h1 className='font-semibold mb-4'>Hight Speed Wifi</h1>
          <p className='text-center text-sm'>
            The network connection in our space is always active so that there
            is no curb in work
          </p>
        </div>

        <div className='w-full bg-slate-100 rounded p-10 flex flex-col justify-center items-center shadow-md hover:bg-white'>
          <span className='my-6'>
            <CoffeeIcon className='text-4xl' />
          </span>
          <h1 className='font-semibold mb-4'>Hight Speed Wifi</h1>
          <p className='text-center text-sm'>
            The network connection in our space is always active so that there
            is no curb in work
          </p>
        </div>
      </div>
    </div>
  )
}
