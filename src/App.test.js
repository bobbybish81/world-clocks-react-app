import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('assign World Clocks header', () => {
    render(<App />);
    const headerElement = screen.getByText(/World Clocks/i);
    expect(headerElement).toBeInTheDocument();
  });
  test('check for date', () => {
    render(<App />);
    const dateElement = screen.getByTestId('Stockholm-date');
    expect(dateElement).toBeInTheDocument();
  });
  test('check for timezone time', () => {
    render(<App />);
    const timeElement = screen.getByTestId('Stockholm-time');
    expect(timeElement).toBeInTheDocument();
  });
  test('check for Stockholm clock', () => {
    render(<App />);
    const cityElement = screen.getByTestId('Stockholm');
    expect(cityElement).toBeInTheDocument();
  });
});



