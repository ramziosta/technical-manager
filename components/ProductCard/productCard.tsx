// ProductCard.tsx
import React from 'react';
import Image from 'next/image';
// ProductCard.tsx

interface Product {
  id: number;
  name: string;
  label: string;
  color: string;
  prompt: string;
  n_prompt: string;
  url: string;
  strength: number;
}


interface Props {
  product: Product;
  onClick?: () => void;
  isSelected?: boolean;
}
const ProductCard: React.FC<Props> = ({ product, onClick = () => {}, isSelected = false }) => {
  const cardStyle = {
    border: isSelected ? '2px solid blue' : 'none',
    cursor: onClick !== (() => {}) ? 'pointer' : 'default',
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <Image src={product.url} alt={product.name} width="100" height="100" />
      <h3>Name: {product.name}</h3>
      <h4>Label: {product.label}</h4>
      <p>color: {product.color}</p>
      <p>prompt: {product.prompt}</p>
      <p>n_Prompt: {product.n_prompt}</p>
      <p>Strength: {product.strength}</p>
    </div>
  );
};


export default ProductCard;