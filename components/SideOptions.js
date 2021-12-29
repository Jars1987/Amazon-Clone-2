import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';
import SideOptionRow from './SideOptionRow';

function SideOptions({ handleToggle, userName }) {
  return (
    <div className='absolute flex max-w-2xl z-50 max-h-screen'>
      <div className='relative flex flex-col'>
        <div className='sticky p-3 whitespace-nowrap flex items-center space-x-2 top-0 w-full bg-amazon_blue-light'>
          <img
            className='rounded-full h-7 ml-6'
            loading='lazy'
            objectFit='contain'
            src='https://cdn4.vectorstock.com/i/1000x1000/03/78/user-icon-black-silhouette-isolated-on-white-vector-20390378.jpg'
            alt='Avatar'
          />
          <h5 className='font-bold text-white text-lg pl-2 pr-20'>
            Hello{userName ? `, ${userName}` : ''}
          </h5>
        </div>
        <div className='overflow-auto overscroll-contain bg-white border-t-gray-100'>
          {/* Section options */}
          <div className='flex flex-col justify-content'>
            <div className='h-16 py-4 items-center px-8'>
              <h3 className='font-bold tracking-wide'>
                Digital Content and Devices
              </h3>
            </div>
            <SideOptionRow title='Prime Video' />
            <SideOptionRow title='Amazon Music' />
            <SideOptionRow title='Apps for Android' />
            <SideOptionRow title='Echo, Alexa & Smart Home' />
            <SideOptionRow title='Fire TV' />
            <SideOptionRow title='Fire Tablets' />
            <SideOptionRow title='Kindle E-readers & Books' />
          </div>
          <div className='flex flex-col justify-content border-t border-gray-200'>
            <div className='h-16 py-4 items-center px-8'>
              <h3 className='tracking-wide font-bold'>Shop By Departement </h3>
            </div>
            <SideOptionRow title='Books' />
            <SideOptionRow title='Films, TV, Music & Games' />
            <SideOptionRow title='Eletronics & Computers' />
            <SideOptionRow title='Echo, Alexa & Smart Home' />
            <SideOptionRow title='Home, Garden, Pets & DIY' />
            <SideOptionRow title='Fire Tablets' />
            <SideOptionRow seeAll />
          </div>
          <div className='flex flex-col justify-content border-t border-gray-200'>
            <div className='h-16 py-4 items-center px-8'>
              <h3 className='font-bold tracking-wide'>Programs & Features</h3>
            </div>
            <SideOptionRow title='Gift Cards & Top Up' />
            <SideOptionRow title='Find a Gift' />
            <SideOptionRow title='Handmade' />
            <SideOptionRow title='Amazon Launchpad' />
            <SideOptionRow seeAll />
          </div>
          <div className='flex flex-col justify-content border-t border-gray-200'>
            <div className='h-16 py-4 items-center px-8'>
              <h3 className='font-bold tracking-wide'>Help & Settings</h3>
            </div>
            <SideOptionRow title='Your Account' />
            <SideOptionRow title='Current Settings' />
            <SideOptionRow title='Customer Service' />
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-transparent text-white cursor-pointer flex pt-3 ml-2 items-top justify-center'>
        <p onClick={() => handleToggle()} className='text-xl'>
          X
        </p>
      </div>
    </div>
  );
}

export default SideOptions;
