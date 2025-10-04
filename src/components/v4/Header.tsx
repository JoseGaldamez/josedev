import React from 'react'
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MailIcon } from 'lucide-react'

export const HeaderV4 = () => {
  return (
    <div className='w-full fixed top-0 left-0 right-0 z-10 backdrop-blur-sm'>
        <div className='max-w-7xl mx-auto p-5 flex items-center justify-between'>
            <div>
              <Tooltip>
                <TooltipTrigger className='text-center flex flex-col justify-center items-center'>
                  <ChatBubbleBottomCenterTextIcon className='h-6 w-6 text-[#7b7b7b]' />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Chat with my AI</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <h1 className='text-2xl font-bold uppercase text-gray-500'>Jose Galdamez</h1>
            <div>
              <Tooltip>
                <TooltipTrigger className='text-center flex flex-col justify-center items-center'>
                  <MailIcon className='h-6 w-6 text-[#7b7b7b]' />
                  
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
