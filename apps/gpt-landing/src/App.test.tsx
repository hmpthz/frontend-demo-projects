import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders navigation call to action', () => {
    render(<App />);
    expect(screen.getAllByText(/sign up/i)[0]).toBeInTheDocument();
  });
});
