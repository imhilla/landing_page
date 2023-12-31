'use client'
import React from 'react'
import Header from './Header'
import Image from 'next/image'
import face1 from '../../../public/faces/face1.jpg'
import face2 from '../../../public/faces/face2.jpg'
import face3 from '../../../public/faces/face3.jpg'
import face4 from '../../../public/faces/face4.jpg'
import face5 from '../../../public/faces/face5.jpg'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Illustration from '../../../public/illustration.jpg'
export default function TopSection() {
  return (
    <div className='min-h-screen bg-white flex flex-col justify-between p-10 md:px-20 2xl:px-40'>
      <Header />
      <div className='flex flex-col md:flex-row h-full mt-4 md:mt-0'>
        <div className='flex flex-col md:w-1/2 justify-between h-full'>
          <h1 className='font-bold mb-4 md:mt-10 self-start text-3xl md:text-5xl'>Find A Comfortable Worlplace</h1>
          <p className='text-sm md:w-2/3 my-5'>
            From costs savings to increased collaboration opportunities,
            coworking spaces can make for ideal offices, especially for small and growing businesses.
          </p>
          <button
            style={{ backgroundColor: '#161d49' }}
            className='self-start py-3 text-white text-sm font-medium px-4 mb-4 rounded mt-4'>
            Get In Touch
          </button>
          <div className='flex items-center relative w-full my-4 flex-wrap md:flex-nowrap'>
            <div className='relative flex items-center w-3/6 md:w-1/5 h-16 mr-3 md:mr-5'>
              <div className='h-14 w-14 absolute z-10'>
                <Image
                  className='rounded-full bg-white p-1'
                  src={face1}
                  alt="face1"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className='h-14 w-14 absolute z-20 left-4'>
                <Image
                  className='rounded-full bg-white p-1'
                  src={face2}
                  alt="face2"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className='h-14 w-14 absolute z-30 left-8'>
                <Image
                  className='rounded-full bg-white p-1'
                  src={face3}
                  alt="face3"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className='h-14 w-14 absolute z-40 left-12'>
                <Image
                  className='rounded-full bg-white p-1'
                  src={face4}
                  alt="face4"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className='h-14 w-14 absolute z-50 left-16'>
                <Image
                  className='rounded-full bg-white p-1'
                  src={face5}
                  alt="face5"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
            </div>
            <div className='flex flex-col items-center justify-center font-semibold md:hidden md:w-0'>
              <h1 className='text-sm'>4.8/5</h1>
              <span className='flex flex-row'>
                <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                <StarHalfIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
              </span>
            </div>

            <div className='flex flex-row items-center w-full md:w-1/2'>
              <div className='mt-4'>
                <h1 className='text-xs font-medium'>
                  12,000+ people already used Aviera to enhance their productivity
                </h1>
              </div>
              <div className='hidden md:flex flex-col items-center justify-center'>
                <h1 className='text-sm'>4.8/5</h1>
                <span className='flex flex-row'>
                  <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                  <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                  <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                  <StarIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                  <StarHalfIcon className='text-xl' style={{ color: 'rgba(22, 29, 73, 255)' }} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 bg-white h-full self-start'>
          <Image
            src={Illustration}
            className='mb-0 md:mb-8'
            alt="illustration"
            style={{
              width: '90%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}
