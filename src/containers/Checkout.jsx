import React, { useContext } from 'react';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <div className={styles['my-orders']}>
        <div className={styles['my-orders-container']}>
          <h1 className={styles.title}>My orders</h1>

          <div className={styles['my-orders-content']}>
            <Order content={state.cart}>
              {state.cart.map((product) => (
                <OrderItem product={product} key={`orderItem-${product.id}`} />
              ))}
            </Order>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
