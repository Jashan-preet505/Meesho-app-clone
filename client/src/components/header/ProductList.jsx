import React from 'react';

const ProductList = ({ products }) => {
  return (
    <ul>
      {products.length > 0 ? (
        products.map((product) => <li key={product.id}>{product.name}</li>)
      ) : (
        <li>No products found.</li>
      )}
    </ul>
  );
};

export default ProductList;

