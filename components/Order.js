import moment from 'moment';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { reOrderProducts } from '../slices/basketSlice';

function Order({
  id,
  amount,
  amountShipping,
  items,
  timestamp,
  images,
  names,
  productIds,
}) {
  const dispatch = useDispatch();
  const reOrderItems = () => {
    dispatch(reOrderProducts(productIds));
  };

  return (
    <div className='relative border rounded-md'>
      <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
        <div>
          <p className='text-xs font-bold'>ORDER PLACED</p>
          <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
        </div>

        <div>
          <p className='text-xs font-bold'>TOTAL</p>
          <p>
            <NumberFormat value={amount} prefix={'€'} displayType={'text'} /> -
            Next Day Delivery{' '}
            <NumberFormat
              value={amountShipping}
              prefix={'€'}
              displayType={'text'}
            />
          </p>
        </div>

        <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>
          {items.length} {items.length === 1 ? 'item' : 'items'}
        </p>

        <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>
          ORDER # {id}
        </p>
      </div>

      <div
        className='p-5 sm:p-10 flex justify-between
      '>
        <div className='flex space-x-6 overflow-x-auto'>
          {images.map((image, i) => (
            <img
              key={'Image' + i}
              src={image}
              alt=''
              className='h-20 object-contain sm:h-32'
            />
          ))}
        </div>
        <button
          onClick={reOrderItems}
          className='button rounded-md h-10 px-6 sm:px-8 md:px-10'>
          Re-Order
        </button>
      </div>
    </div>
  );
}

export default Order;
