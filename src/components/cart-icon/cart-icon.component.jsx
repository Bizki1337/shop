import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

import styles from './cart-icon.module.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div 
    className={styles.wrapper} 
    onClick={toggleCartHidden}
  >
    <ShoppingIconSVG className={styles.icon}/>
    <span className={styles.count}>{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
