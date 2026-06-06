import React from 'react'

interface TwoBlockProps {
  children: React.ReactNode
}


export const TwoBlocks = ({ children }: TwoBlockProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {children}
      </div>
    </div>
  )
}
