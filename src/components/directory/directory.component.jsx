import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import styles from './directory.module.scss';

const Directory = ({ sections }) => {
  return(
    <>
      {
        sections && (
          <div className={styles.wrapper}>
            {
              sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
              ))
            }
          </div>
        )
      }
      {
        !sections && <div>loading...</div>
      }
    </>
  )

}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
