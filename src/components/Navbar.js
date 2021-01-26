import React from 'react';
import loadable from '@loadable/component';

import SCROLL from '../utils/scroll';
import { useDetectScroll } from '../hooks/useDetectScroll';

const Burger = loadable(() => import('../components/Burger'));
const Logo = loadable(() => import('../components/Logo'));
const Searchbar = loadable(() => import('../components/Searchbar'));

export default function Navbar() {
  const { scroll } = useDetectScroll(SCROLL.PIXEL_TO_SCROLL_TO_BLUR_NAVBAR);
  return (
    <div className={`navbar container ${scroll ? '--scroll' : ''}`}>
      <Burger />
      <Logo />
      <Searchbar />
    </div>
  );
}
