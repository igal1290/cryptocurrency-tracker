import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Coins from '../Coins';
import { MemoryRouter } from 'react-router-dom';

test('Should render coins component', () => {
  render(
    <MemoryRouter>
      <Coins />
    </MemoryRouter>
  );
  const coinsElement = screen.getByTestId('coins-1');
  expect(coinsElement).toBeInTheDocument();
});
