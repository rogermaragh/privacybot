import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('cruip-js-toolkit', () => ({ focusHandling: jest.fn() }));
jest.mock('aos', () => ({ init: jest.fn() }));
jest.mock('axios', () => ({ get: jest.fn(), post: jest.fn() }));

test('renders the home page and links to the local request form', () => {
    window.scroll = jest.fn();
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(screen.getByRole('heading', { name: 'PrivacyBot' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '/inputform');
});
