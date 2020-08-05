import React from 'react';
import useCart from '../hooks/use-cart';

const Cart = () => {
  const [{ cart, show }, { toggleCart }] = useCart();

  if (!show) {
    return null;
  }

  return (
    <div style={{ backgroundColor: 'orchid' }}>
      <button onClick={toggleCart}>X</button>
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default Cart;
