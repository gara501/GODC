import icon from '../assets/img/compass.png'

interface BlockTitleProps {
  title: string;
}

export const BlockTitle = ({ title }: BlockTitleProps) => {
  return (
    <div className='container mx-auto mb-24'>
      <div className='flex-col items-center place-items-center w-full'>
        <img src={icon} alt='icon' className='my-8 w-12' />
        <h2 className='text-[3rem] font-cinzel-bold my-12'>{title}</h2>
        <hr className='w-[40%] bg-red-500 h-1'></hr>
      </div>
      
    </div>
  )
}
