import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderiza el título', () => {
  render(<App />);
  expect(screen.getByText(/task manager/i)).toBeInTheDocument();
});
