import React from 'react';
import Link from 'next/link';
import useCart from '../../hooks/use-cart';

const navigation = [
  { title: 'home', route: '/' },
  { title: 'shop', route: '/shop' }
];

const Header = () => {
  const [, { toggleCart }] = useCart();

  return (
    <header>
      <strong>PRAIRIE WIND APPAREL</strong>
      <nav>
        {navigation.map(({ title, route }, idx) => (
          <Link href={route} key={`${title}-${idx}`}>
            <a>{title}</a>
          </Link>
        ))}
      </nav>
      <button onClick={toggleCart}>Cart</button>
    </header>
  );
};

export default Header;
