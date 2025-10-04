'use client';
import React from 'react'
import LottieAnimation from './LottieAnimation'

export const HomeHeroV4 = () => {
  return (
    <div className='min-h-screen flex items-center justify-between flex-col gap-8 p-5'>
        <div></div>
      <h1 className='text-9xl font-bold'>
        <span className='text-[#7b7b7b]'>Fullstack</span>
        Developer
    </h1>
      <div>
        <LottieAnimation />
      </div>
    </div>
  )
}
