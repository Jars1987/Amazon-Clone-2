import RelatedProductItem from './RelatedProductItem';

function RelatedProductsList({ relatedProducts, selectedProduct }) {
  const filteredList = relatedProducts.filter(
    relPrd => relPrd !== selectedProduct
  );
  return (
    <div className='flex flex-col md:space-x-18 m-8 md:mr-20'>
      <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ml-2 sm:ml-4 md:ml-8 mb-8'>
        Customers who viewed this product also viewed
      </h1>
      <div
        className={`flex justify-start overflow-scroll ml-4 sm:8 md:12 lg:ml-16 `}>
        {filteredList &&
          filteredList.map(({ id, title, price, image, rating }) => (
            <RelatedProductItem
              id={id}
              price={price}
              image={image}
              rating={rating}
              title={title}
            />
          ))}
      </div>
    </div>
  );
}

export default RelatedProductsList;
