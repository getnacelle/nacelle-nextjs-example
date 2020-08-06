import React from 'react';
import Link from 'next/link';

import useCart from '../hooks/use-cart';
import * as styles from './header.styles';

const Header = ({ space }) => {
  const [, { toggleCart }] = useCart();
  const navItems = space.linklists[0].links;

  return (
    <header css={styles.header}>
      <strong css={styles.name}>{space.name}</strong>
      <nav>
        {navItems.map(({ title, to }, idx) => (
          <Link href={to} key={`${title}-${idx}`}>
            <a>{title}</a>
          </Link>
        ))}
      </nav>
      <button onClick={toggleCart}>Cart</button>
    </header>
  );
};

export default Header;
