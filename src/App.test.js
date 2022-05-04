import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('Should render header and global search', () => {
    render(<App />);
    const headerElement = screen.getByText(/SpaceX Monitoring/i);
    const searchElement = screen.getByPlaceholderText(/Keyword Search/i);

    expect(headerElement).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
  });
})
