import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import styles from './collection-preview.module.scss';

const CollectionPreview = ({ 
  title, 
  items, 
  history, 
  match, 
  routeName 
}) => (
  <div className={styles.wrapper}>
    <h1 
      onClick={() => history.push(`${match.path}/${routeName}`)}
      className={styles.title}
    >
      {title.toUpperCase()}
    </h1>
    <div className={styles.content}>
      {
        items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))
      }
    </div>
  </div>
);

export default withRouter(CollectionPreview);
