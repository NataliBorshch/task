import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

describe('MainPage component ', () => {
  it('MainPage render', () => {
    render(<MainPage />);
    expect(screen.getByRole('list')).toBeDefined();
  });

  it('MainPage snapshot', () => {
    const mainpage = render(<MainPage />);
    expect(mainpage).toMatchSnapshot();
  });
});
