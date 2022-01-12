import Image from 'next/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';
import { useRouter } from 'next/router';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({
  id,
  title,
  description,
  price,
  category,
  image,
  ratings,
  createNotification,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [rating] = useState(Math.floor(ratings.rate) + MIN_RATING);
  const [hasPrime] = useState(Math.random() < 0.5);

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
    createNotification(product.title);
  };

  const goToProduct = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10 duration-300 hover:scale-105'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>
        {category}
      </p>
      <Image
        onClick={goToProduct}
        className='cursor-pointer'
        src={image}
        height={200}
        width={200}
        objectFit='contain'
      />
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className='h-5 text-yellow-500' />
          ))}
      </div>
      <p className='text-xs my-2 line-clamp-2'>{description}</p>
      <div className='mb-5 '>
        <NumberFormat value={price} prefix={'€'} displayType={'text'} />
      </div>
      {hasPrime && (
        <div className='flex items-center space-x-2 -mnt-5'>
          <img
            className='w-12'
            src='https://links.papareact.com/fdw'
            alt='Prime Logo'
          />
          <p className='text-xs text-gray-500'>FREE Next-Day Delviery</p>
        </div>
      )}
      <button onClick={addItemToBasket} className='mt-auto button'>
        Add to Basket
      </button>
      <p
        onClick={goToProduct}
        className='mt-2 text-sm self-center text-blue-300 hover:text-blue-500 cursor-pointer'>
        Go to Product
      </p>
    </div>
  );
}

export default Product;
