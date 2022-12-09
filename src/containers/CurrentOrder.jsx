import React, { useContext } from 'react';
import Image from 'next/image';

import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

import flechita from '@icons/flechita.svg';

import Link from 'next/link';
import styles from '../styles/CurrentOrder.module.css';

const CurrentOrder = ({ closeComponent }) => {
  const { state } = useContext(AppContext);
  const prices = state.cart.length > 0 && state.cart.map((product) => product.price);
  const totalBalance = prices && prices.reduce((sum, price) => sum + price, 0);

  return (
    <aside className={styles.CurrentOrder}>
      <div className={styles["title-container"]}>
        <button 
          type='button'
          onClick={closeComponent}
          className='button-element'
        >
          <Image src={flechita} alt="arrow" className="icon" />
        </button>
        <p className={styles.title}>My order</p>
      </div>

      <div className={styles['my-order-content']}>
        <div className={styles['my-order__product-list']}>
          {state.cart.map((product) => (
            <OrderItem product={product} key={`orderItem-${product.id}`} />
          ))}
        </div>

        <div className={styles['my-order-buttons']}>
          <div className={styles.order}>
            <p>
              <span>Total</span>
            </p>
            <p>${totalBalance}</p>
          </div>

          <Link href="/checkout" >
            <button className={styles['primary-button']}>
                Checkout 
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CurrentOrder;
