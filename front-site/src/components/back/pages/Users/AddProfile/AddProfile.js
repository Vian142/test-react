// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import createReactClass from 'create-react-class';
import classnames from 'classnames';
import InputBlock from '../../common/InputBlock/InputBlock';
import StaticContent from '../../common/StaticContent/StaticContent';
import styles from './styles.css';
// /////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Добавить пользователя'
}
// /////////////////////////////////////////////////////////////////////////////
const AddProfile = createReactClass({
    getInitialState() {
        return {
            name: ''
        }  
    },
    render() {
        return (
            <StaticContent {...propsPage}>
                <div className={styles.mainWrapper}>
                    <div className={classnames(styles.fromWrapper)}>
                        <InputBlock
                        />
                    </div>
                </div>
            </StaticContent>
        );
    }
})

// /////////////////////////////////////////////////////////////////////////////
export default AddProfile;
// /////////////////////////////////////////////////////////////////////////////