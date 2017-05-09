import React from 'react';
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function LinkButton(props) {
  const { children, url, type='link', styleClass = null } = props;
  switch(type) {
    case 'link': return <a href={url} className={classnames(styles.btn, styleClass)}> {children} </a>
    case 'link-route': return <Link to='url' className={classnames(styles.btn, styleClass)}>{children}</Link>
  }
}

// /////////////////////////////////////////////////////////////////////////////
export default LinkButton;

// /////////////////////////////////////////////////////////////////////////////
