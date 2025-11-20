import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from '../../pages/index';

describe('Home page', () => {
  it('renders hero layout', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /enter metaverse/i })).toBeInTheDocument();
  });
});
