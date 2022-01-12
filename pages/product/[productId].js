import { useRouter } from 'next/router';
import { useRef } from 'react';
import Footer from '../../components/Footer';
import HeaderComponent from '../../components/HeaderComponent';
import ProductCard from '../../components/ProductCard';
import RelatedProductsList from '../../components/RelatedProductsList';

const ProductDisplay = ({
  id,
  title,
  description,
  price,
  category,
  image,
  rating,
  relatedProducts,
}) => {
  const topPageRef = useRef(null);

  const scrollToTop = () => {
    topPageRef.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'start',
    });
  };

  return (
    <div ref={topPageRef}>
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
      <RelatedProductsList
        relatedProducts={relatedProducts}
        selectedProduct={id}
      />
      <Footer scrollToTop={scrollToTop} />
    </div>
  );
};

export default ProductDisplay;

/* 
export async function getStaticPaths() {
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );

  const paths = products.map(product => ({
    params: { productId: String(product.id) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { productId } = context.params;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then(res => res.json());
  const { id, title, description, price, category, image, rating } = product;

  const relatedProducts = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then(res => res.json());

  return {
    props: {
      id,
      title,
      description,
      price,
      category,
      image,
      rating,
      relatedProducts,
    },
  };
}
*/

export async function getServerSideProps(context) {
  const { productId } = context.params;
  const product = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  ).then(res => res.json());
  const { id, title, description, price, category, image, rating } = product;

  const relatedProducts = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  ).then(res => res.json());

  console.log(rating);
  return {
    props: {
      id,
      title,
      description,
      price,
      category,
      image,
      rating,
      relatedProducts,
    },
  };
}
