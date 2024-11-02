import godc from '../assets/img/godc-logo.png';

export const Footer = () => {
  return (
    

    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://godc.com.co/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={godc} className='w-[200px]' alt="logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">A:.G:.D:.G:.A:.D:.U:.</span>
                </a>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-lg text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://godc.com.co/" className="hover:underline">Gran Oriente de Colombia</a>. Derechos Reservados.</span>
        </div>
    </footer>


  )
}
