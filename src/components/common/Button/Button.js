// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function Button(props) {
    const {children, url, type, size, style = null} = props;
    return <span
        className={classnames(styles.btn,
            (size == 'small') && styles.btnSmall,
            (size == 'normal') && styles.btnNormal,
            (size == 'big') && styles.btnBig,
            style)}>
        {
            (!type == 'link') ?
                {children} :
                <a
                    href={url}
                    className={classnames(
                        styles.btnLink
                    )}>
                    {children}
                </a>
        }
    </span>;
}

// /////////////////////////////////////////////////////////////////////////////
export default Button;

// /////////////////////////////////////////////////////////////////////////////
