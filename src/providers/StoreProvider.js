import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import Client from 'shopify-buy';

import StoreContext from '../contexts/StoreContext';

const client = Client.buildClient(
  {
    storefrontAccessToken: 'ea04b0ffc051f4ca2e66316e94d74e1d',
    domain: `talonnade.myshopify.com`,
  },
  fetch
);

const StoreProvider = ({ children }) => {
  const [expandedCart, setExpandedCart] = useState(false);

  let initialStoreState = {
    client,
    adding: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
  };

  const [store, setStore] = useState(initialStoreState);

  const updateVariantToCart = (variantId, quantity) => {
    if (quantity && variantId) {
      setStore({ ...store, adding: true });
    }

    const { checkout, client } = store;
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [{ variantId, quantity: parseInt(quantity, 10) }];
    return client.checkout
      .addLineItems(checkoutId, lineItemsToUpdate)
      .then((checkout) => {
        setStore({ ...store, checkout, adding: false });
      })
      .catch((err) => console.error(err));
  };

  const removeLineItem = (client, checkoutId, lineItemId) => {
    return client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        setStore({ ...store, checkout: res });
      });
  };

  const updateLineItem = (client, checkoutId, lineItemId, quantity) => {
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        setStore({ ...store, checkout: res });
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      // Check for an existing cart.
      const existingCheckoutID = localStorage?.getItem('shopify_checkout_id');

      const setCheckoutInState = (checkout) => {
        const isBrowser = typeof window !== 'undefined';
        if (isBrowser) {
          localStorage.setItem('shopify_checkout_id', checkout.id);
        }

        setStore((prevState) => {
          return { ...prevState, checkout };
        });
      };

      const createNewCheckout = () => store.client.checkout.create();
      const fetchExistingCheckout = (checkoutId) =>
        store.client.checkout.fetch(checkoutId);

      if (existingCheckoutID) {
        try {
          const checkout = await fetchExistingCheckout(existingCheckoutID);
          // Make sure this cart hasn’t already been purchased.
          if (!checkout.completedAt) {
            setCheckoutInState(checkout);
            return;
          }
        } catch (e) {
          console.error(e);
          localStorage.setItem('shopify_checkout_id', null);
        }
      }

      const newCheckout = await createNewCheckout();
      setCheckoutInState(newCheckout);
    };
    initializeCheckout();
  }, [store.client.checkout]);

  return (
    <StoreContext.Provider
      value={{
        store,
        updateVariantToCart,
        removeLineItem,
        updateLineItem,
        expandedCart,
        setExpandedCart,
      }}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
