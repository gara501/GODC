import React from 'react'

interface TwoBlockProps {
  children: React.ReactNode
}


export const TwoBlocks = ({ children }: TwoBlockProps) => {
  return (
    <div className='container mx-auto'>
      <div className='flex gap-12'>
        {children}
      </div>
    </div>
  )
}
