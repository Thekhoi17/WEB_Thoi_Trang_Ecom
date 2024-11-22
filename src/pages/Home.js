import React from 'react';
import Hero from '../components/Hero';
import Product from '../components/Product';

const products = [
  { id: 1, name: 'Product 1', price: 99.99, image: '/path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: 79.99, image: '/path/to/image2.jpg' },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container mt-5">
        <h2>Featured Products</h2>
        <div className="d-flex flex-wrap">
          {products.map(product => <Product key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;

