import { useState, Dispatch, SetStateAction, useMemo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseMobileMenu {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export function useMobileMenu(): UseMobileMenu {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMemo(() => {
    console.log('Mobile menu open: ', mobileMenuOpen);
  }, [mobileMenuOpen]);

  return { mobileMenuOpen, setMobileMenuOpen };
}

export default useMobileMenu;
