import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './menu-item.module.scss';

const MenuItem = ({ 
  title, 
  imageUrl, 
  size, 
  history, 
  linkUrl, 
  match 
}) => (
  <div 
    className={`${styles.wrapper} ${size ? styles.width : ''}`}   
    onClick={() => history.push(`${match.url}${linkUrl}`)}  
  >
    <div 
      className={styles.img}
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className={styles.content}>
      <span className={styles.title}>{title.toUpperCase()}</span>
      <span className={styles.subtitle}>BUY NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
