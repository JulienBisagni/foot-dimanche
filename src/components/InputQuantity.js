import React from 'react';
import loadable from '@loadable/component';

const Icon = loadable(() => import('./Icon'));

export default function InputQuantity({ quantity, onClickRemove, onClickAdd }) {
  return (
    <div className='input-quantity'>
      <button type='button' className='btn --icon' onClick={onClickRemove}>
        <Icon icon='remove' additionalClassName='input-quantity__icon' />
      </button>
      <p className='input-quantity__number'>{quantity}</p>
      <button type='button' className='btn --icon' onClick={onClickAdd}>
        <Icon icon='add' additionalClassName='input-quantity__icon' />
      </button>
    </div>
  );
}
