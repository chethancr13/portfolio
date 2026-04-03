import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio shell', () => {
  render(<App />);
  expect(screen.getAllByText('Chethan R').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Expertise').length).toBeGreaterThan(0);
});
