import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useCart } from 'hooks';
import * as styles from './header.styles';

const Header = ({ space }) => {
  const router = useRouter();
  const [{ cart }, { toggleCart }] = useCart();
  const navItems = space.linklists[0].links;
  const showCartCount = cart.length > 0;

  return (
    <header css={styles.header}>
      <strong css={styles.name}>{space.name}</strong>
      <nav css={styles.nav}>
        {navItems.map((link, idx) => {
          const isCurrentPage = router.asPath === link.to;
          const { href, to } = createLinkHref(link);

          return (
            <Link href={href} as={to} key={`${link.title}-${idx}`}>
              <a css={[styles.navLink, isCurrentPage && { color: '#ee7acb' }]}>
                {link.title}
              </a>
            </Link>
          );
        })}
      </nav>
      <button css={styles.cartButton} onClick={toggleCart}>
        <svg
          aria-hidden="true"
          focusable="false"
          css={styles.cartIcon}
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
          />
        </svg>
        {showCartCount && <span css={styles.cartCount}>{cart.length}</span>}
      </button>
    </header>
  );
};

function createLinkHref(link) {
  if (link.type.toLowerCase() === 'page') {
    return { href: link.to, to: link.to };
  }

  const base = `/${link.type.toLowerCase()}s`;

  return {
    href: `${base}/[handle]`,
    to: `${base}/${link.title.replace("'", '').toLowerCase()}`
  };
}

export default Header;
