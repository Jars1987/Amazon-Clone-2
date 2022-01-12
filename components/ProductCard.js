import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import getQuote from '../utils/getQuote';

function ProductCard({
  id,
  title,
  description,
  price,
  category,
  image,
  ratings,
}) {
  const [rating] = useState(Math.floor(ratings.rate) + 1);
  const dispatch = useDispatch();
  const [hasPrime] = useState(Math.random() < 0.5);
  const quote = getQuote();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      price,
      category,
      image,
      hasPrime,
      rating,
      quantity: 1,
    };
    dispatch(addToBasket(product));
  };

  return (
    <div className=' ml-8 mt-10 mr-8 lg:m-20 md:grid md:grid-cols-12 pb-10 border-b border-gray-200'>
      <div className='md:col-span-4'>
        <Image
          className='cursor-pointer'
          src={image}
          height={400}
          width={400}
          objectFit='contain'
        />
      </div>
      <div className='md:col-span-6 lg:mr-14'>
        <div className='mt-10'>
          <h4 className='my-3 text-2xl'>{title}</h4>
          <div className='flex pb-4 border-b'>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className='h-5 text-yellow-500' />
              ))}
            <p className='text-gray-400'> - {ratings.count} Ratings</p>
          </div>

          <p className='my-2'>{description}</p>
          <div className='flex flex-col justify-center mt-10'>
            <p className='text-gray-700 italic text-xl '>
              <span className='md:text-3xl'>"</span>
              {quote.quote}
              <span className='md:text-3xl'>"</span>
            </p>
            <p className='self-end'>
              {quote.name} - {quote.usState}
            </p>
          </div>
        </div>
      </div>

      <div className='  mb-5 md:col-span-2 md:border-2 md:border-gray-300 md:p-2 md:rounded-md'>
        <div className='flex items-center justify-center md:flex-col p-4'>
          <div className='flex items-center justify-center md:flex-col mb-4'>
            <p className='mb-2 mx-4 font-bold'>
              Buy Now:{'   '}
              <span className='text-red-700'>
                <NumberFormat
                  value={price}
                  prefix={'€'}
                  displayType={'text'}
                  decimalScale={2}
                  fixedDecimalScale
                />
              </span>
            </p>
            <div className='flex flex-col mt-4 justify-center'>
              <p className='text-xs sm:text-sm text-gray-400 sm:mb-2'>
                Please check the final price of the product during the purchase
                process, as the VAT rate corresponding to your delivery address
                will only be calculated at that time.{' '}
                <span className='cursor-pointer text-blue-500 hover:text-blue-700'>
                  Check Details
                </span>
              </p>
              {hasPrime ? (
                <div className='flex items-center space-x-2'>
                  <img
                    className='w-12'
                    src='https://links.papareact.com/fdw'
                    alt='Prime Logo'
                  />
                  <p className='text-xs text-gray-500'>
                    FREE Next-Day Delviery
                  </p>
                </div>
              ) : (
                <p className='text-sm '>
                  <span className='text-blue-700'>Free Shipping</span> - 2 Days
                  Delivery
                </p>
              )}
            </div>
          </div>
          <button onClick={addItemToBasket} className='px-4 button'>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
