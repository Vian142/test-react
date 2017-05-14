// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

// /////////////////////////////////////////////////////////////////////////////
function ContentHtml(props) {
    const { children , styleName = null } = props;
    return <div className={classnames(styles.contentContainer, styleName)}>
        {
            {dangerouslySetInnerHTML:{__html: {children} }}
        }
    </div>
}

// /////////////////////////////////////////////////////////////////////////////
export default ContentHtml;
// /////////////////////////////////////////////////////////////////////////////