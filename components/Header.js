import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <div className='flex intems-center bg-amazon_blue p-1 flex-grow py-2'>
        {/* Top Nav */}
        <div className='flex intems-center mt-2 flex-grow sm:flex-grow-0'>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            objectFit='contain'
            className='cursor-pointer'
          />
        </div>
        <div className='hidden sm:flex flex-grow items-center h-10 bg-yellow-400 rounded-md  hover:bg-yellow-500 cursor-pointer'>
          <input
            className='flex-shrink flex-grow p-2 h-full w-6 focus:outline-none bg-white  rounded-l-md'
            type='text'
          />
          <SearchIcon className='h-12 p-4' />
        </div>
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
          <div className='link'>
            <p>Hello Jose Santos</p>
            <p className='font-extrabold md:text-sm'>Account & Lists </p>
          </div>
          <div className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative link flex items-center'>
            <span className='absolute top-0 right-0 md:right-10 text-black text-center font-bold bg-yellow-400 rounded-full h-4 w-4'>
              0
            </span>
            <ShoppingCartIcon className='h-10 mr-2 md:mr-0' />
            <p className='font-extrabold md:text-sm hidden md:inline mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div>{/* Bottom Nav */}</div>
    </header>
  );
}

export default Header;
