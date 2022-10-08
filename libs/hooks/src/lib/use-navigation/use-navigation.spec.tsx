import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useNavigation from './use-navigation';

describe('useNavigation', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useNavigation());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
