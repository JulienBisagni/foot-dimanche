import React from 'react';
import loadable from '@loadable/component';

const Navbar = loadable(() => import('../components/Navbar'));
const Cart = loadable(() => import('../components/Cart'));

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Cart />
      <div className='container --main'>{children}</div>
    </>
  );
}
