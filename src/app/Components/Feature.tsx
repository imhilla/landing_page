import React from 'react'
import Image from 'next/image'
import googleImage from '../../../public/google.png'
import yahooImage from '../../../public/yahoo.png'
import productHuntImage from '../../../public/product_hunt.png'
import bingImage from '../../../public/bing.png'
import envantImage from '../../../public/envanto.png'

export default function Feature() {
  return (
    <div className='w-full flex flex-col items-center justify-center px-10 bg-white'>
      <h1 className='font-semibold mb-8 self-center text-2xl md:text-4xl'>We are featured on</h1>
      <div className='w-full flex flex-col items-center justify-center md:flex-row'>
        <div className='w-full flex justify-center items-center'>
          <Image
            className='mb-8 md:mb-0'
            src={googleImage}
            alt="Close Nav Bar"
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>

        <div className='w-full flex justify-center items-center'>
          <Image
            className='mb-8 md:mb-0'
            src={yahooImage}
            alt="Close Nav Bar"
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>

        <div className='w-full flex justify-center items-center'>
          <Image
            className='mb-8 md:mb-0'
            src={productHuntImage}
            alt="Close Nav Bar"
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>

        <div className='w-full flex justify-center items-center'>
          <Image
            className='mb-8 md:mb-0'
            src={bingImage}
            alt="Close Nav Bar"
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>

        <div className='w-full flex justify-center items-center'>
          <Image
            className='mb-8 md:mb-0'
            src={envantImage}
            alt="Close Nav Bar"
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}
