import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LandingPage from './LandingPage';
import { storeWrapper } from 'utils';
import * as hook from './hooks/use-landing.hook';

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: () => jest.fn().mockImplementation(() => Promise.resolve()),
  },
});
jest.mock('store', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: jest.fn().mockImplementation((func) =>
    func({
      landing: {
        state: {
          roman: 'test',
        },
        status: 'rejected',
      },
    }),
  ),
}));

describe('Landing Page Test Suite', () => {
  it('check if page renders correctly', () => {
    const { container } = render(<LandingPage />, { wrapper: storeWrapper });
    expect(container).toMatchSnapshot();
  });
  it('form component test', async () => {
    render(<LandingPage />, { wrapper: storeWrapper });
    const input = screen.getByLabelText('number-input') as HTMLInputElement;
    fireEvent.change(input, {
      target: { value: '23' },
    });
    fireEvent.submit(screen.getByRole('form'));
    expect(input.value).toBe('23');
  });
  it('copy roman numeral event test', () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    render(<LandingPage />, { wrapper: storeWrapper });
    fireEvent.click(screen.getByTestId('heading'));
    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test');
  });
  it('test for useEffect - isFulfilled case', () => {
    jest.spyOn(hook, 'useLanding').mockImplementation(() => ({
      romanLetters: '',
      isFulfilled: true,
      isError: false,
      isLoading: false,
      onChange: jest.fn,
      onCopy: jest.fn,
      onClick: jest.fn(),
      onSubmit: jest.fn,
    }));
    render(<LandingPage />, { wrapper: storeWrapper });
  });
  it('test for isLoading case', () => {
    jest.spyOn(hook, 'useLanding').mockImplementation(() => ({
      romanLetters: '',
      isFulfilled: false,
      isError: false,
      isLoading: true,
      onChange: jest.fn,
      onCopy: jest.fn,
      onClick: jest.fn(),
      onSubmit: jest.fn,
    }));
    render(<LandingPage />, { wrapper: storeWrapper });
  });
});
