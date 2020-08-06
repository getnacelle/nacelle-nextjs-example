import React from 'react';
import Link from 'next/link';

import { useCart, useSpace } from 'hooks';
import * as styles from './header.styles';

const Header = () => {
  const [, { toggleCart }] = useCart();
  const space = useSpace();
  
  if (Object.entries(space).length) {
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
  } else {
    return null
  }
};

export default Header;
