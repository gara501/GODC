interface QuoteProps {
  title: string
}


export const Quote = ({ title }: QuoteProps) => {
  return (
    <div className='border-b-gray-200 border-2  h-[500px]'>
      <div className='container mx-auto'>
        <div className='flex  h-[500px] items-center justify-center'>
          <h2 className='md:text-xl xl:text-6xl font-cinzel-bold text-center text-gray-400'>{title}</h2>
        </div>
      </div>
    </div>
  )
}
