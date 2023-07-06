// ProductsList.tsx
import React from 'react';
import {products} from "../../constants/data"
import ProductCard from '../ProductCard/productCard';

const ProductsList: React.FC = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
