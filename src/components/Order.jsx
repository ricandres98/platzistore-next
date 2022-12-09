import React from 'react';
import styles from 'styles/Checkout.module.scss';

const Order = ({ children, content }) => {
  const orderDate = new Date().toLocaleDateString();
  const prices = content.length > 0 && content.map((product) => product.price);
  const totalBalance = prices && prices.reduce((sum, price) => sum + price, 0);
  return (
    <>
      <div className={styles.order}>
        <p>
          <span>{orderDate}</span>
          <span>{children?.length} articles</span>
        </p>
        <p>${totalBalance}</p>
      </div>
      {children}
    </>
  );
};

export default Order;
