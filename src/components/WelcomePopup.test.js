import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect';
import WelcomePopup from './WelcomePopup'; // Adjust the path if necessary

test('renders WelcomePopup component', () => {
  render(<WelcomePopup />);
  
  // Check if the heading is rendered
  expect(screen.getByText('Welcome to the Hackathon!')).toBeInTheDocument();
  
  // Check if the paragraph is rendered
  expect(screen.getByText('We are excited to have you here.')).toBeInTheDocument();
  
  // Check if the close button is rendered
  expect(screen.getByText('Close')).toBeInTheDocument();
});

test('closes the modal when the close button is clicked', () => {
  render(<WelcomePopup />);
  
  // Click the close button
  fireEvent.click(screen.getByText('Close'));
  
  // Check if the modal is no longer in the document
  expect(screen.queryByText('Welcome to the Hackathon!')).not.toBeInTheDocument();
});
