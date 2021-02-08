import { useContext } from 'react';

import StoreContext from '../contexts/StoreContext';

export const useStore = () => {
  const {
    store,
    updateVariantToCart,
    removeLineItem,
    updateLineItem,
    expandedCart,
    setExpandedCart,
  } = useContext(StoreContext);

  const checkout = () => {
    window.open(store.checkout.webUrl);
  };
  return {
    store,
    updateVariantToCart,
    removeLineItem,
    updateLineItem,
    expandedCart,
    setExpandedCart,
    checkout,
  };
};
