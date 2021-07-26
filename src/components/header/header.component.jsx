import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import styles from './header.module.scss';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <div className={styles.wrapper}>
    <Link to='/' className={styles.logo}>
        <Logo  />
    </Link>
    <div className={styles.option}>
      <Link className={styles.optionLink} to='/shop'>SHOP</Link>
      <Link className={styles.optionLink} to='/shop'>CONTACT</Link>
      {currentUser ? (
        <Link as='div' className={styles.optionLink} onClick={signOutStart}>
          SIGN OUT
        </Link>
      ) : (
        <Link className={styles.optionLink} to='/signin'>SIGN IN</Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
