import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders the primary call to action', () => {
    render(<App />);
    const ctas = screen.getAllByText(/sign in/i);
    expect(ctas.length).toBeGreaterThan(0);
  });
});
