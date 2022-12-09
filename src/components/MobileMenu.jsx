import React from 'react';
import Image from 'next/image';

import closeIcon from '@icons/icon_close.png';

import styles from '@styles/MobileMenu.module.scss';
import Link from 'next/link';

const MobileMenu = ({ closeComponent }) => {
  return (
    <div className={styles.MobileMenu}>
      <Image src={closeIcon} alt="close" onClick={closeComponent} />
      <ul>
        <li>
          <Link href="/">CATEGORIES</Link>
        </li>
        <li>
          <Link href="/">All</Link>
        </li>
        <li>
          <Link href="/">Clothes</Link>
        </li>
        <li>
          <Link href="/">Electronics</Link>
        </li>
        <li>
          <Link href="/">Furnitures</Link>
        </li>
        <li>
          <Link href="/">Toys</Link>
        </li>
        <li>
          <Link href="/">Other</Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="./#/orders" onClick={closeComponent}>
            My orders
          </Link>
        </li>
        <li>
          <Link href="./#/account" onClick={closeComponent}>
            My account
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/" className={styles.email}>
            platzi@example.com
          </Link>
        </li>
        <li>
          <Link href="./" className={styles['sign-out']}>
            Sign out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
