import Product from './Product';

function ProductFeed({ products }) {
  return (
    <div className='grid grid-flow-row-dense grid-cols-[repeat(auto-fit,24rem)] justify-center md:-mt-52'>
      {products
        .slice(0, 4)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
          />
        ))}
      <img
        className='md:col-span-full'
        src='https://links.papareact.com/dyz'
        alt=''
      />
      <div className='md:col-span-2 '>
        {products
          .slice(4, 5)
          .map(({ id, title, description, price, category, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              price={price}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, description, price, category, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            description={description}
            price={price}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
