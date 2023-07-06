'use client'
import React from 'react'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo from '../../../public/aviera_logo.png'

export default function Footer() {
  return (
    <div style={{ backgroundColor: 'rgba(22, 29, 73, 255)', color: "#fff" }}>
      <div className='flex flex-col md:flex-row justify-between p-10 md:p-20 lg:p-30 2xl:p-40'>
        <div className='flex flex-col md:w-1/5 lg:w-1/4'>
          <Image
            className='mb-4'
            src={logo}
            alt="Close Nav Bar"
            style={{
              width: '50%',
              height: 'auto',
            }}
          />
          <p className='text-sm lg:text-sm'>
            Get education on business planning,
            direct access to planning experts and a
            funding the valuable platform.
          </p>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 lg:w-1/4'>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-xl'>Company</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>About Us</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Our Story</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Careers</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Press Center</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-xl'>Solution</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Customer Support</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Delivery Details</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Terms and Condition</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Works</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-xl'>Policies</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Security Safeguards</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Terms of Service</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Privacy</a>
              <a className='text-sm mb-2 lg:text-sm hover:underline' href=''>Accessibility</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div className='flex flex-col justify-between'>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-xl'>Contact Us</h1>
            <p className='mb-2 md:mb-4 text-sm lg:text-sm'>You will find your next business quote you prefer.</p>
            <div className='flex flex-row'>
              <FacebookIcon className='text-3xl mr-2 lg:mr-4' />
              <InstagramIcon className='text-3xl mr-2 lg:mr-4' />
              <TwitterIcon className='text-3xl mr-2 lg:mr-4' />
              <YouTubeIcon className='text-3xl mr-2 lg:mr-4' />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-5 md:py-10 2xl:py-14 flex justify-center border-t	border-t-slate-600'>
        <div className='flex flex-row items-center'>
          <CopyrightIcon className='mr-1 text-lg' />
          <h1 className='text-xs md:text-sm'>2023 Aviera. All rights reserved.</h1>
        </div>
      </div>
    </div>
  )
}
