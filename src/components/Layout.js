import React from 'react';
import loadable from '@loadable/component';

const Navbar = loadable(() => import('../components/Navbar'));

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='container --main'>{children}</div>
    </>
  );
}
