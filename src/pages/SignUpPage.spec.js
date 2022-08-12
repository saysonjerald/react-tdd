import { render, screen } from '@testing-library/react';
import SignUpPage from './SignUpPage';

describe('Sign Up Page', () => {
  describe('Layout', () => {
    // Geting the Heading (H1-H6) element with the value of 'Sign Up'
    it('has header', () => {
      render(<SignUpPage />);
      const header = screen.queryByRole('heading', { name: 'Sign Up' });
      expect(header).toBeInTheDocument();
    });
    // To check if a label with 'Username' is exist in the DOM
    it('has username input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Username');
      expect(input).toBeInTheDocument();
    });
    // To check if a label with 'email' is exist in the DOM
    it('has email input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Email');
      expect(input).toBeInTheDocument();
    });
    // To check if an input is oftype password
    it('has password type for the password input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password');
      expect(input.type).toBe('password');
    });
    // To check if an input is oftype password
    it('has password type for the password repeat input', () => {
      render(<SignUpPage />);
      const input = screen.getByLabelText('Password Repeat');
      expect(input.type).toBe('password');
    });
    // Check if button with Sign Up value exist inside the DOM
    it('has Sign Up button', () => {
      render(<SignUpPage />);
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).toBeInTheDocument();
    });
    // Button shoulod be disabled as expected
    it('disables the button initially', () => {
      render(<SignUpPage />);
      const button = screen.queryByRole('button', { name: 'Sign Up' });
      expect(button).toBeDisabled();
    });
  });
});
