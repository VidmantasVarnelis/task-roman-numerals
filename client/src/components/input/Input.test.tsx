import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input component Test Suite', () => {
  it('check if input correctly renders', () => {
    const { container } = render(<Input onChange={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });
});
