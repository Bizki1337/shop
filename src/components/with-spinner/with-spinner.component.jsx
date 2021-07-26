import React from 'react';

import styles from './with-spinner.module.scss';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className={styles.wrapper}>
        <div className={styles.spinner}/>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    )
  };
  return Spinner;
};

export default WithSpinner;
