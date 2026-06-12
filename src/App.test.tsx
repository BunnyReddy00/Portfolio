import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the personalized portfolio heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /C BHANU PRAKASH REDDY/i });
  expect(heading).toBeInTheDocument();
});

test('shows the public certificate links section', () => {
  render(<App />);
  expect(screen.getByText(/Tap any card to view the credential directly/i)).toBeInTheDocument();
});

test('shows all uploaded certificate PDF links', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /Full Stack Web Development Internship/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /AWS Academy Graduate - Data Engineering/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Building AI Agents using n8n Workshop/i })).toBeInTheDocument();
});
