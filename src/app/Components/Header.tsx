'use client'
import React from 'react'
import logo from '../../../public/aviera_logo.png'
import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  return (
    <div className='flex flex-row w-full justify-between items-center mb-4'>
      <div className='md:hidden md:w-0' >
        <MenuIcon />
      </div>
      <div className='w-16 md:w-32'>
        <Image
          className='hover:cursor-pointer'
          src={logo}
          alt="logo"
          style={{
            width: '60%',
            height: 'auto',
          }}
        />
      </div>
      <div className='hidden md:flex flex-row justify-between w-1/2 px-20 font-semibold text-sm'>
        <a className='hover:cursor-pointer'>Demo</a>
        <a className='hover:cursor-pointer'>About</a>
        <a className='hover:cursor-pointer'>Blog</a>
        <a className='hover:cursor-pointer'>Pages</a>
        <a className='hover:cursor-pointer'>Contacts</a>
      </div>
      <div className='md:hidden mb-0'></div>
      <div className='hidden md:flex flex-row justify-center items-center'>
        <div className='mr-4'>
          <a className='font-semibold text-sm'>Sign In</a>
        </div>
        <button
          style={{ backgroundColor: '#161d49' }}
          className='self-start py-3 text-white text-sm font-medium px-4 mb-4 rounded mt-4'>        Get Started For Free
        </button>
      </div>
    </div>
  )
}
