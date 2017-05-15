///////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import 'normalize.css';
import '../../../theme/_typography.css';
import 'font-awesome/css/font-awesome.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from './styles.css';

///////////////////////////////////////////////////////////////////////////////
const LayoutBack = createReactClass({
  render() {
    const { children } = this.props;
    return <div className={styles.mainWrapper}>
      <div className={styles.leftContainer}>
        <Sidebar/>
      </div>
      <div className={styles.rightContainer}>
        <Header/>
        {children}
      </div>
    </div>
  }
});

///////////////////////////////////////////////////////////////////////////////
export default LayoutBack;

///////////////////////////////////////////////////////////////////////////////