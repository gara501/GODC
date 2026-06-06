import React from 'react'

interface BlockProps {
  children: React.ReactNode
}

export const Block = ({ children }: BlockProps) => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-6 md:px-12">
      {children}
    </div>
  )
}
