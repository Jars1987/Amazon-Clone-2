import { useRouter } from 'next/router';
import HeaderComponent from '../../components/HeaderComponent';
import ProductCard from '../../components/ProductCard';

const ProductDisplay = ({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
}) => {
  return (
    <div>
      <HeaderComponent />
      <ProductCard
        id={id}
        title={title}
        description={description}
        price={price}
        category={category}
        image={image}
        ratings={rating}
      />
      <div>{/* Related Products */}</div>
      <div>{/* Footer */}</div>
    </div>
  );
};

export default ProductDisplay;

export async function getServerSideProps(context) {
  const { productId } = context.params;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then(res => res.json());
  const { id, title, description, price, category, image, rating } = product;

  return {
    props: {
      id,
      title,
      description,
      price,
      category,
      image,
      rating,
    },
  };
}
