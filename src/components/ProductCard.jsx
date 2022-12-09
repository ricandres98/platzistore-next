import React, { useContext } from 'react';
import Image from 'next/image';

import addToCartIcon from '@icons/bt_add_to_cart.svg';
import removeFromCartIcon from '@icons/remove_from_cart.svg';

import AppContext from '../context/AppContext';
import styles from '../styles/ProductCard.module.scss';

const ProductCard = ({ product }) => {
  const { addToCart, removeItem, state } = useContext(AppContext);

  const isInCart = state.cart.some((cartItem) => cartItem.id === product.id);

  const handleClick = (item) => {
    isInCart ? removeItem(item.id) : addToCart(item);
  };

  return (
    <div className={styles['product-card']}>
      <Image 
        src={product.images[0]} 
        width={300} height={300} 
        alt={product.title} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <button onClick={() => handleClick(product)}>
          <Image
            src={isInCart ? removeFromCartIcon : addToCartIcon}
            alt={isInCart ? 'remove item from cart' : 'add item to cart'}
            width={30}
            height={30}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
