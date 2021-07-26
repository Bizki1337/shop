import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import styles from './checkout.module.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className={styles.wrapper}>
    <div className={styles.header}>
      <div className={styles.title}>
        Product
      </div>
      <div className={styles.title}>
        Quantity
      </div>
      <div className={styles.title}>
        Price
      </div>
      <div className={styles.title}>
        Remove
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className={styles.total}>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
