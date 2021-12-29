import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/solid';

function SideOptionRow({ title, seeAll }) {
  if (seeAll) {
    return (
      <div className='flex min-w-52 h-12 px-8 items-center hover:bg-gray-100 cursor-pointer'>
        <p className='text-start text-sm'>See all</p>
        <ChevronDownIcon className='h-5' />
      </div>
    );
  } else {
    return (
      <div
        className='flex min-w-52 h-12 px-8 items-center hover:bg-gray-100 cursor-pointer'
        cursor-pointer>
        <p className='flex-grow text-start text-sm'>{title}</p>
        <ChevronRightIcon className='h-5 flex-end' />
      </div>
    );
  }
}

export default SideOptionRow;
