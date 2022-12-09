import Image from 'next/image';
import React from 'react';
import closeIcon from 'assets/icons/icon_close.png';
import addToCartIcon from 'assets/icons/bt_add_to_cart.svg';
import '../styles/ProductDetail.scss';

const ProductDetail = () => {
  return (
    <aside class="product-detail">
      <div class="product-detail-close">
        <Image src={closeIcon} alt="close" />
      </div>
      <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
      <div class="product-info">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
          <Image src={addToCartIcon} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
