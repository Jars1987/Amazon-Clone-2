import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

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
  return (
    <div className='grid grid-cols-5'>
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
        <p className='text-xs my-2 line-clamp-3'>{description}</p>
        <div className='flex items-center space-x-2'>
          <NumberFormat value={price} prefix={'€'} displayType={'text'} />
          <p className='font-bold'>{quantity === 1 ? '' : `x ${quantity}`}</p>
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
      <div className='flex flex-col space-y-2 my-auto justify-self-end'>
        <button onClick={addItemToBasket} className='button'>
          Add To Basket
        </button>
        <button onClick={removeItemFromBasket} className='button'>
          Remove From Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
