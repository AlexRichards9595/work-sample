import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const feedElement = screen.getByTestId('Feed');
  expect(feedElement).toBeInTheDocument();
});
