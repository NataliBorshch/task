import { render, screen } from '@testing-library/react';
import Container from './Container';

const children = <h1>Hello</h1>;

describe('Container component ', () => {
  it('Container snapshot witch children', () => {
    const userMenu = render(<Container>{children}</Container>);
    expect(userMenu).toMatchSnapshot();
  });

  it('Container snapshot without children', () => {
    const userMenu = render(<Container />);
    expect(userMenu).toMatchSnapshot();
  });
});
