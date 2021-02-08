import React, { useState } from 'react';
import loadable from '@loadable/component';

import { useStore } from '../hooks/useStore';

const CartItem = loadable(() => import('./CartItem'));
const Icon = loadable(() => import('./Icon'));

const Cart = () => {
  const { store, checkout, expandedCart, setExpandedCart } = useStore();
  const { lineItems } = store.checkout;

  const toggleCart = () => {
    setExpandedCart(!expandedCart);
  };

  return (
    <>
      {lineItems.length > 0 && (
        <div className={`cart ${expandedCart ? '--active' : ''}`}>
          <div className='cart__header'>
            <button type='button' className='btn --icon' onClick={toggleCart}>
              <Icon icon='arrow_back' additionalClassName='cart__icon' />
            </button>
            <h1 className='cart__title'>Mon panier</h1>
          </div>
          <div className='cart__items'>
            {lineItems?.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className='cart__checkout'>
            <h3 className='cart__total'>{store.checkout.totalPrice}€</h3>
            <button
              className='btn --secondary'
              onClick={checkout}
              disabled={lineItems.length === 0}>
              Acheter
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
