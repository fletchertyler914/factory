import { render } from '@testing-library/react';

import Toolbar from './tool-bar';

describe('Toolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Toolbar />);
    expect(baseElement).toBeTruthy();
  });
});
