import { useState } from 'react';

export const useBurger = () => {
  const [open, setOpen] = useState(false);

  const openBurger = () => {
    setOpen(true);
  };

  const closeBurger = () => {
    setOpen(false);
  };

  return { open, openBurger, closeBurger };
};
