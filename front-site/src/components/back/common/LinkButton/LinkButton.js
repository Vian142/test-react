import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function LinkButton(props) {
  const { children, url, type = 'link', title = null, styleClass = null, icon = null } = props;
  switch(type) {
    case 'link': return <a href={url}
      title={title || children}
      className={classnames(styles.btn, styleClass)}>
      {icon && <i className={classnames('fa', icon)} />}
      <span>{children}</span>
    </a>
    case 'link-route': return <Link to={url}
      title={title || children}
      className={classnames(styles.btn, styleClass)}>
      {icon && <i className={classnames('fa', icon)} />}
      <span>{children}</span>
    </Link>
  }
}

// /////////////////////////////////////////////////////////////////////////////
export default LinkButton;

// /////////////////////////////////////////////////////////////////////////////
