import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders yo', () => {
  const { getByText } = render(<App />);
  const yoEl = getByText(/yo/i);
  expect(yoEl).toBeInTheDocument();
});
