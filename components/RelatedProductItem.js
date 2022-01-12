import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import NumberFormat from 'react-number-format';

function RelatedProductItem({ id, title, price, image, rating }) {
  const router = useRouter();
  const [nStars] = useState(Math.floor(rating.rate) + 1);

  const goToProduct = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div onClick={goToProduct} className='px-2'>
      <div className='w-60 relative text-center border-2 shadow-md rounded-md border-gray-400 p-8 h-full'>
        <Image objectFit='contain' src={image} height={150} width={100} />
        <h3 className='mb-2 text-bold text-sm text-ellipsis'>{title}</h3>
        <div className='flex justify-around items-center px-2 mb-4'>
          <NumberFormat
            className='tx-sm text-red-700'
            value={price}
            prefix={'€'}
            displayType={'text'}
            decimalScale={2}
            fixedDecimalScale
          />
          <div className='flex'>
            {Array(nStars)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className='h-4 text-yellow-500' />
              ))}
            <p className='text-xs'> - {rating.count}</p>
          </div>
        </div>

        <p className='text-xs absolute bottom-2 right-20 text-blue-500 hover:text-blue-700 cursor-pointer'>
          Check Details
        </p>
      </div>
    </div>
  );
}

export default RelatedProductItem;
