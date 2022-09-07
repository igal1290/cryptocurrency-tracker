import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';
import { MemoryRouter } from 'react-router-dom';

test('should render Navbar component', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );
  const navbarElement = screen.getByTestId('navbar-1');
  expect(navbarElement).toBeInTheDocument();
});
