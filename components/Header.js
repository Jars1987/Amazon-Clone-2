import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

function Header({ handleToggle }) {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className='flex intems-center bg-amazon_blue p-1 flex-grow py-2'>
        <div
          onClick={() => router.replace('/')}
          className='flex intems-center mt-2 flex-grow sm:flex-grow-0'>
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
          <div onClick={!session ? signIn : signOut} className='link'>
            <p>{session ? `Hello ${session.user.name}` : 'Sign In'}</p>
            <p className='font-extrabold md:text-sm'>Account & Lists </p>
          </div>
          <div
            onClick={() => session && router.push('/orders')}
            className='link'>
            <p>Returns</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div
            className='relative link flex items-center'
            onClick={() => router.push('/checkout')}>
            <span className='absolute top-0 right-0 md:right-10 text-black text-center font-bold bg-yellow-400 rounded-full h-4 w-4'>
              {items.length}
            </span>
            <ShoppingCartIcon className='h-10 mr-2 md:mr-0' />
            <p className='font-extrabold md:text-sm hidden md:inline mt-2'>
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6'>
        <p className='link flex items-center'>
          <MenuIcon className='h-6 mr-1' onClick={() => handleToggle()} />
          All
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Toda's Deals</p>
        <p className='link hidden lg:inline-flex'>Electronics</p>
        <p className='link hidden lg:inline-flex'>Food & Grocery</p>
        <p className='link hidden lg:inline-flex'>Prime</p>
        <p className='link hidden lg:inline-flex'>Buy Again</p>
        <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
        <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
