import React from 'react';

import styles from './form-input.module.scss';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className={styles.wrapper}>
    <input 
      onChange={handleChange} 
      className={ `${styles.input} ${props.value.length ? 'shrink' : ''}`}
      {...props}
    />
    <label className={styles.label}>
      {label}
    </label>
  </div>
);

export default FormInput;
