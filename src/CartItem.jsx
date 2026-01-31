import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (item.quantity * parseFloat(item.cost.replace('$', ''))), 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  return (
    <div>
      <h2>Total: ${calculateTotalAmount()}</h2>
      {cart.map(item => (
        <div key={item.name}>
          <span>{item.name} (Qty: {item.quantity})</span>
          <button onClick={() => handleIncrement(item)}>+</button>
          <button onClick={() => handleDecrement(item)}>-</button>
          <button onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default CartItem;