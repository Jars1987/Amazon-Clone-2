import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import {
  addToBasket,
  removeFromBasket,
  removeAllFromBasket,
} from '../slices/basketSlice';

function CheckoutProduct({
  id,
  title,
  description,
  price,
  category,
  image,
  hasPrime,
  rating,
  quantity,
}) {
  const dispatch = useDispatch();

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

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  const removeAllItemsFromBasket = () => {
    dispatch(removeAllFromBasket({ id }));
  };

  return (
    <div className='grid grid-cols-5 mb-5'>
      <Image src={image} width={200} height={200} objectFit='contain' />
      <div className='col-span-3 mx-5'>
        <p>{title}</p>
        <div className='flex'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className='h-5 text-yellow-500' />
            ))}
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='flex flex-start items-center space-x-2'>
          <NumberFormat value={price} prefix={'€'} displayType={'text'} />
        </div>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img
              className='w-12'
              loading='lazy'
              src='https://links.papareact.com/fdw'
              alt='prime'
            />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='justify-self-end'>
        <div className='flex flex-col items-center mt-2 space-y-3'>
          <div className='flex justify-center items-center bg-gray-100 rounded-full w-4/5'>
            <button
              onClick={addItemToBasket}
              className='signButton rounded-l-full'>
              +
            </button>
            <p className='font-bold m-2 px-4'>{quantity}</p>
            <button
              onClick={removeItemFromBasket}
              disabled={quantity === 1}
              className='signButton rounded-r-full'>
              -
            </button>
          </div>

          <button
            onClick={removeAllItemsFromBasket}
            className='button rounded-md sm:px-3 '>
            Remove From Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
