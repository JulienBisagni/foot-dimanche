import React from 'react';

import loadable from '@loadable/component';
import { useBurger } from '../hooks/useBurger';

const Icon = loadable(() => import('../components/Icon'));

export default function Burger() {
  const { open, openBurger, closeBurger } = useBurger();
  return (
    <button type='button' onClick={openBurger} className='btn --icon'>
      <Icon icon='reorder' additionalClassName='burger' />
    </button>
  );
}
