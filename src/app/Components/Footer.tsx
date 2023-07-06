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
      className='p-10'
      style={{ backgroundColor: 'rgba(22, 29, 73, 255)', color: "#fff" }}
    >
      <div className='flex flex-col justify-between'>
        <div className='flex flex-col'>
          <span className='mb-4'>Logo</span>
          <div>
            <p>
              Get education on business planning,
              direct access to planning experts and a
              funding the valuable platform.
            </p>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='mb-4 mt-4 font-bold'>Company</h1>
          <div className='flex flex-col'>
            <a href=''>About Us</a>
            <a href=''>Our Story</a>
            <a href=''>Careers</a>
            <a href=''>Press Center</a>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='mb-4 mt-4 font-bold'>Solution</h1>
          <div className='flex flex-col'>
            <a href=''>Customer Support</a>
            <a href=''>Delivery Details</a>
            <a href=''>Terms and Condition</a>
            <a href=''>Works</a>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='mb-4 mt-4 font-bold'>Policies</h1>
          <div className='flex flex-col'>
            <a href=''>Security Safeguards</a>
            <a href=''>Terms of Service</a>
            <a href=''>Privacy</a>
            <a href=''>Accessibility</a>
          </div>
        </div>

        <div className='flex flex-col justify-between'>
          <h1 className='mb-4 mt-4 font-bold'>Contact Us</h1>
          <div className='flex flex-col'>
            <p className='mb-8'>You will find your next business quote you prefer</p>
            <div className='flex flex-row mb-8'>
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </div>
          </div>
        </div>
      </div>

      <div className='w-full'>
        <div className='flex flex-row'>
          <CopyrightIcon className='mr-2' />
          <h1>2023 Sark. All rights reserved</h1>
        </div>
      </div>
    </div>
  )
}
