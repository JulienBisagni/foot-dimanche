import React, { useState } from 'react';
import loadable from '@loadable/component';

import { getPrice } from '../utils/getters';
import { useStore } from '../hooks/useStore';
const ImageGrid = loadable(() => import('./ImageGrid'));
const InputQuantity = loadable(() => import('./InputQuantity'));

export default function Product({ product }) {
  const { updateVariantToCart, store, setExpandedCart } = useStore();

  const { title, description, images, variants } = product;
  const price = getPrice(variants[0].price, store.checkout);
  const [variantId, setVariantId] = useState(variants[0].shopifyId);
  const [quantity, setQuantity] = useState(1);

  const handleChangeVariant = (e) => {
    setVariantId(e.target.value);
  };

  const handleAddQuantity = () => setQuantity(quantity + 1);

  const handleRemoveQuantity = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToBasket = () => {
    updateVariantToCart(variantId, quantity);
    setExpandedCart(true);
  };

  return (
    <div className='product'>
      <div className='product__info container --primary'>
        <div className='product__header'>
          <h2 className='product__title'>{title}</h2>
          <p className='product__price'> {price}</p>
        </div>
        <p className='product__description'>{description}</p>
      </div>
      <div className='product__images container --primary'>
        <ImageGrid images={images} />
      </div>
      <div className='product__cta container --primary'>
        <select
          value={variantId}
          className='input-select btn --secondary'
          onChange={handleChangeVariant}>
          {variants?.map((variant) => (
            <option
              key={variant.shopifyId}
              value={variant.shopifyId}
              className='select__variant'>
              {variant.title}
            </option>
          ))}
        </select>
        <InputQuantity
          quantity={quantity}
          onClickAdd={handleAddQuantity}
          onClickRemove={handleRemoveQuantity}
        />
        <button
          className='btn --secondary'
          type='button'
          onClick={handleAddToBasket}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
