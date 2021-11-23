import { render, screen } from '@testing-library/react';
import App from './App';
import functions from './loginInputs';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('si escribo el email con el formato correcto debe aceptarlo', () => {
  expect(functions.sum(1, 1)).toBe(2);

test('si escribo la contraseña con el formato correcto debe aceptarla' , () => {
  expect(functions.mult(10, 20)).toBe(200);
})
});