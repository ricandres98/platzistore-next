import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AppContext from 'context/AppContext';
import DesktopMenu from 'components/DesktopMenu';
import CurrentOrder from 'containers/CurrentOrder';
import MobileMenu from 'components/MobileMenu';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

import styles from 'styles/Header.module.scss';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const [toggleMobile, setToggleMobile] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
    // if (toggleOrders) setToggleOrders(false);
  };
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
    // if (toggle) setToggle(false);
  };

  const handleToggleMobile = () => {
    setToggleMobile(!toggleMobile);
    // if (toggle) setToggle(false);
  };

  return (
    <header className={styles.Header}>
      <nav>
        <Image src={menu} alt="menu" className={styles.menu} onClick={handleToggleMobile} />

        <div className={styles['navbar-left']}>
          <Link href="./">
            <Image src={logo} alt="logo" className="logo" />
          </Link>

          <ul>
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
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>

        <div className={styles['navbar-right']}>
          <ul>
            <li>
              <button
                type="button"
                className={`${styles['navbar-email']} ${styles['button-element']}`}
                onClick={handleToggle}
              >
                platzi@example.com
              </button>
            </li>
            <li>
              <button
                className={`${styles['navbar-shopping-cart']} button-element`}
                onClick={handleToggleOrders}
              >
                <Image src={shoppingCart} alt="shopping cart" className="icon" />
                {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
              </button>
            </li>
          </ul>

          {toggle && <DesktopMenu closeComponent={() => setToggle(false)} />}
          {toggleOrders && <CurrentOrder closeComponent={() => setToggleOrders(false)} />}
        </div>
        {toggleMobile && <MobileMenu closeComponent={() => setToggleMobile(false)} />}
      </nav>
    </header>
  );
};

export default Header;
