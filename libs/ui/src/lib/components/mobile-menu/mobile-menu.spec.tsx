import { useMobileMenu } from '@factory/hooks';
import { render } from '@testing-library/react';

import MobileMenu from './mobile-menu';

describe('MobileMenu', () => {
  const { mobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  it('should render successfully', () => {
    const { baseElement } = render(
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={(open) => setMobileMenuOpen(open)}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
