import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decrementFromCart, addToCart } from '../store/actions/cartActions';
import './cart.css';

const Keranjang = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleDecrementFromCart = (productId) => {
    dispatch(decrementFromCart(productId));
  };

  const handleIncrementFromCart = (product) => {
    dispatch(addToCart(product));
  };

  // Menghitung subtotal untuk setiap produk
  const subtotalPerItem = (price, quantity) => {
    return price * quantity;
  };

  // Menghitung total harga keseluruhan
  const totalHarga = cartItems.reduce((acc, item) => acc + subtotalPerItem(item.price, item.quantity), 0);

  return (
    <div className="cart">
      <h2>Keranjang</h2>
      {cartItems.length === 0 ? (
        <p>Keranjang Anda kosong</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Harga: ${item.price.toFixed(2)}</p>
                  <p>Jumlah: {item.quantity}</p>
                  <p>Subtotal: ${subtotalPerItem(item.price, item.quantity).toFixed(2)}</p>
                  <div className="button-group">
                    <button onClick={() => handleDecrementFromCart(item.id)}>-</button>
                    <button onClick={() => handleIncrementFromCart(item)}>+</button>
                    <button onClick={() => handleRemoveFromCart(item.id)}>Hapus</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <strong>Total Harga:</strong> ${totalHarga.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Keranjang;
