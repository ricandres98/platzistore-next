import React, { useContext } from 'react';
import Image from 'next/image';

import closeIcon from '@icons/icon_close.png';

import AppContext from '../context/AppContext';
import styles from '../styles/ShoppingCart.module.css';

const OrderItem = ({ product }) => {
  const { removeItem } = useContext(AppContext);
  return (
    <div className={styles['shopping-cart']}>
      <figure>
        <Image 
          src={product.images[0]} 
          alt={product.title} 
          width={70} 
          height={70} 
        />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <button 
        type="button" 
        className='button-element'
        onClick={() => removeItem(product.id)}
      >
        <Image src={closeIcon} alt="close" className="icon" />
      </button>
    </div>
  );
};

export default OrderItem;
