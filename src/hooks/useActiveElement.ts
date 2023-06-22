import React, { useState, useEffect } from 'react';

export const useActiveElement = () => {
  const [active, setActive] = useState<any>(document.activeElement);

  const handleFocusIn = (e: any) => {
    setActive(document.activeElement);
  };

  useEffect(() => {
    document
      .querySelector('input[type="search"]')
      .addEventListener('focusin', handleFocusIn);
    document
      .querySelector('input[type="search"]')
      .addEventListener('focusout', handleFocusIn);

    return () => {
      document
        .querySelector('input[type="search"]')
        .removeEventListener('focusin', handleFocusIn);
      document
        .querySelector('input[type="search"]')
        .removeEventListener('focusout', handleFocusIn);
    };
  }, []);

  return active;
};
