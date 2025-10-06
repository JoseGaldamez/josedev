'use client';
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MailIcon } from 'lucide-react'
import Link from 'next/link'
import { ChatAI } from './ChatAI'

export const HeaderV4 = () => {
  return (
    <div className='w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto p-5 flex items-center justify-between'>
            <div>
              <ChatAI />
            </div>
            <Link href='/' className='text-center'>
              <h1 className='text-2xl font-bold uppercase text-gray-500'>Jose Galdamez</h1>
            </Link>
            <div>
              <Tooltip delayDuration={0}>
                <TooltipTrigger className='text-center flex flex-col justify-center items-center'>
                  <Link href='/contact'>
                    <MailIcon className='h-6 w-6 text-[#7b7b7b] hover:text-[#37baba] transition-colors' />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send me an email</p>
                </TooltipContent>
              </Tooltip>
            </div>
        </div>
        
    </div>
  )
}
