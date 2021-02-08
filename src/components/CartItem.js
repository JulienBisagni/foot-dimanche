import React from 'react';
import loadable from '@loadable/component';

import { useStore } from '../hooks/useStore';

const Image = loadable(() => import('./Image'));
const InputQuantity = loadable(() => import('./InputQuantity'));

export default function CartItem({ item }) {
  const { store, removeLineItem, updateVariantToCart } = useStore();

  const handleClickRemoveItem = () => {
    if (item.quantity === 1) {
      removeLineItem(store.client, store.checkout.id, item.id);
    } else {
      updateVariantToCart(item.variant.id, -1);
    }
  };

  const handleClickAddItem = () => {
    updateVariantToCart(item.variant.id, 1);
  };
  return (
    <div className='cart-item'>
      <div className='cart-item__info-container'>
        <div className='cart-item__image'>
          <Image img={item.variant.image} />
        </div>
        <div className='cart-item__content'>
          <p className='cart-item__info'>{item.title}</p>
          <p className='cart-item__info'>{item.variant.title}</p>
          <p className='cart-item__info'>{item.variant.price}</p>
        </div>
      </div>
      <div className='cart-item__quantity-container'>
        <InputQuantity
          quantity={item.quantity}
          onClickAdd={handleClickAddItem}
          onClickRemove={handleClickRemoveItem}
        />
      </div>
    </div>
  );
}
