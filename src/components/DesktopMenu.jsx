import React from 'react';
import Link from 'next/link';
import styles from '../styles/DesktopMenu.module.css';

const DesktopMenu = ({ closeComponent }) => {
  return (
    <div className={styles['desktop-menu']}>
      <ul>
        <li>
          <Link href="/orders" className={styles.title} onClick={closeComponent}>
            My orders
          </Link>
        </li>

        <li>
          <Link href="/account" onClick={closeComponent}>
            My account
          </Link>
        </li>

        <li>
          <a href="./">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopMenu;
