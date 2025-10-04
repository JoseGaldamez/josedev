'use client';
import React from 'react'
import LottieAnimation from './LottieAnimation'

export const HomeHeroV4 = () => {
  return (
    <div className='min-h-screen z-50 flex items-center justify-around flex-col gap-8 p-5'>
        <div className='h-[100px]'>
          
        </div>
      <h1 className='text-6xl lg:text-9xl font-bold text-center'>
          <span className='text-[#7b7b7b]'>Fullstack </span>
          <br />
          <span>
          Developer
          </span>
      </h1>
      <div>
        <LottieAnimation />
      </div>
    </div>
  )
}
