import React from 'react';

import styles from './custom-button.module.scss';

const CustomButton = ({ children, ...props }) => {
  return (
    <button
    {...props}
    className={ `${styles.main} ${props.isGoogleSignIn 
      ? styles.google :  
      props.inverted ? styles.inverted :
      styles.basic}`
    }
    >{children}</button>
  )
}

export default CustomButton;
