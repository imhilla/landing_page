'use client'
import React from 'react'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div style={{ backgroundColor: 'rgba(22, 29, 73, 255)', color: "#fff" }}>
      <div className='flex flex-col md:flex-row justify-between p-10 md:p-20 lg:p-30 2xl:p-40'>
        <div className='flex flex-col md:w-1/5 lg:w-1/4'>
          <Image
            className='mb-4'
            src={require('./../../../public/aviera_logo.png')}
            alt="Close Nav Bar"
            height={100}
            width={100}
          />
          <p className='text-sm lg:text-sm 2xl:text-lg'>
            Get education on business planning,
            direct access to planning experts and a
            funding the valuable platform.
          </p>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 lg:w-1/4'>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-2xl'>Company</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>About Us</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Our Story</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Careers</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Press Center</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-2xl'>Solution</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Customer Support</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Delivery Details</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Terms and Condition</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Works</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div>
            <h1 className='mb-2 md:mb-4 font-semibold lg:text-2xl'>Policies</h1>
            <div className='flex flex-col'>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Security Safeguards</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Terms of Service</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Privacy</a>
              <a className='text-sm mb-3 lg:mb-6 lg:text-sm	2xl:text-lg' href=''>Accessibility</a>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-start md:items-center md:w-1/5 '>
          <div>
            <h1 className='mb-2 md:mb-4 lg:mb-18 font-semibold lg:text-2xl'>Contact Us</h1>
            <div className='flex flex-col'>
              <p className='mb-8 text-sm lg:text-sm	lg:mb-12 2xl:text-lg'>You will find your next business quote you prefer.</p>
              <div className='flex flex-row'>
                <FacebookIcon className='text-4xl mr-2' />
                <InstagramIcon className='text-4xl mr-2' />
                <TwitterIcon className='text-4xl mr-2' />
                <YouTubeIcon className='text-4xl mr-2' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full py-5 md:py-10 flex justify-center border-t	border-t-slate-600'>
        <div className='flex flex-row items-center'>
          <CopyrightIcon className='mr-1' />
          <h1 className='text-sm md:text-sm'>2023 Aviera. All rights reserved</h1>
        </div>
      </div>
    </div>
  )
}
