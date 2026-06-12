import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the personalized portfolio heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /Bunny/i });
  expect(heading).toBeInTheDocument();
});
