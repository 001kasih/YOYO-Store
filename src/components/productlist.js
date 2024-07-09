// ProductList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/actions/productActions';
import { addToCart } from '../store/actions/cartActions';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {productState.loading ? (
        <h2>Loading...</h2>
      ) : productState.error ? (
        <h2>{productState.error}</h2>
      ) : (
        productState.products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>{product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}</p>
              <div className="price-add">
                <h4>${product.price}</h4>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
