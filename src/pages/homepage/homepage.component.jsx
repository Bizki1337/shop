import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSectionsStart } from '../../redux/directory/directory.actions';

import Directory from '../../components/directory/directory.component';

import styles from './homePage.module.scss';

const HomePage = ({fetchSectionsStart}) => {
  useEffect(() => {
    fetchSectionsStart();
  }, [fetchSectionsStart]);
  return (
    <div className={styles.wrapper}>
      <Directory />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  fetchSectionsStart: () => dispatch(fetchSectionsStart())
});

export default connect(null, mapDispatchToProps)(HomePage);
