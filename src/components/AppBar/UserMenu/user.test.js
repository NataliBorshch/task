import { render, screen } from '@testing-library/react';
import UserMenu from './UserMenu';

const name = 'Leonid';

describe('UserMenu component ', () => {
  it('UserMemu snapshot witch name', () => {
    const userMenu = render(<UserMenu name={name} />);
    expect(userMenu).toMatchSnapshot();
  });

  it('UserMemu snapshot without name', () => {
    const userMenu = render(<UserMenu />);
    expect(userMenu).toMatchSnapshot();
  });
});
