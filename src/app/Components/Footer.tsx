'use client'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div
      // className='p-10'
      style={{ backgroundColor: 'rgba(22, 29, 73, 255)', color: "#fff" }}
    >
      <div className='flex flex-col md:flex-row justify-between p-10 md:p-20'>
        <div className='flex flex-col md:w-1/5 p-3'>
          <span className='mb-4 mt-4'>Logo</span>
          <p className='text-sm'>
            Get education on business planning,
            direct access to planning experts and a
            funding the valuable platform.
          </p>
        </div>

        <div className='flex flex-col justify-start items-center md:w-1/5 p-3'>
          <div>
            <h1 className='mb-2 mt-4 font-bold '>Company</h1>
            <div className='flex flex-col '>
              <a className='text-sm mb-3' href=''>About Us</a>
              <a className='text-sm mb-3' href=''>Our Story</a>
              <a className='text-sm mb-3' href=''>Careers</a>
              <a className='text-sm mb-3' href=''>Press Center</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start items-center md:w-1/5 p-3'>
          <div>
            <h1 className='mb-2 mt-4 font-bold'>Solution</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-3' href=''>Customer Support</a>
              <a className='text-sm mb-3' href=''>Delivery Details</a>
              <a className='text-sm mb-3' href=''>Terms and Condition</a>
              <a className='text-sm mb-3' href=''>Works</a>
            </div>
          </div>

        </div>

        <div className='flex flex-col justify-start items-center md:w-1/5 p-3'>
          <div>
            <h1 className='mb-2 mt-4 font-bold'>Policies</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-3' href=''>Security Safeguards</a>
              <a className='text-sm mb-3' href=''>Terms of Service</a>
              <a className='text-sm mb-3' href=''>Privacy</a>
              <a className='text-sm mb-3' href=''>Accessibility</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start items-center md:w-1/5 p-3'>
          <div>
            <h1 className='mb-2 mt-4 font-bold'>Contact Us</h1>
            <div className='flex flex-col'>
              <p className='mb-8 text-sm'>You will find your next business quote you prefer.</p>
              <div className='flex flex-row mb-8'>
                <FacebookIcon className='text-4xl mr-2' />
                <InstagramIcon className='text-4xl mr-2' />
                <TwitterIcon className='text-4xl mr-2' />
                <YouTubeIcon className='text-4xl mr-2' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-5 md:py-9 flex justify-center border-t	border-t-slate-600'>
        <div className='flex flex-row items-center'>
          <CopyrightIcon className='mr-2' />
          <h1 className='text-sm md:text-base'>2023 Sark. All rights reserved</h1>
        </div>
      </div>
    </div>
  )
}
