import React from 'react';

import styles from './cart-item.module.scss';

const CartItem = ({ item: { 
  imageUrl, 
  price, 
  name, 
  quantity 
  } 
}) => (
  <div className={styles.wrapper}>
    <img 
      src={imageUrl} 
      alt='item' 
      className={styles.img}
    />
    <div className={styles.content}>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
