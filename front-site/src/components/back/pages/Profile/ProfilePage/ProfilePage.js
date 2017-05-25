// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import classnames from 'classnames';
import StaticContent from '../../../common/StaticContent/StaticContent';
import styles from './styles.css';
// /////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Ваш профиль'
}
// /////////////////////////////////////////////////////////////////////////////
function Education() {
    return <div className={styles.educationBlock}>
        <div className={styles.educationBlockTitle}>Образование</div>
        <div className={styles.educationItem}>
            <div className={styles.educationItemTopInfo}>
                <div className={styles.educationItemType}>Высшее образование</div>
                <div className={styles.educationItemDate}>2007 - 2017</div>
            </div>
            <div className={styles.educationItemName}>Емрпт</div>
            <div className={styles.educationItemInfo}>Информационных систем и технологий</div>
            <div className={styles.educationItemInfo}>Информатика</div>
            <div className={styles.educationItemGroup}>Т-154</div>
        </div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
function ProfilePage() {
    return <div className={classnames(styles.mainWrapper)}>
        <StaticContent {...propsPage}>
            <div className={styles.mainWrapper}>
                <div className={styles.leftBlock}>
                    <div className={styles.avatarWrapper}>
                        <img src='http://lorempixel.com/200/200'
                            alt="Аватар"
                            className={styles.avatarWrapperPicture} />
                    </div>
                    <div className={styles.contactsWrapper}>
                        <table className={styles.contactsTable}>
                            <tbody>
                                <tr>
                                    <td>Телефон:</td>
                                    <td>
                                        <a href="/" className={styles.contactsTableLink}>6584132</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Моб:</td>
                                    <td>
                                        <a href="/" className={styles.contactsTableLink}>+79500406444</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <a href="/" className={styles.contactsTableLink}>vian142@gmail.com</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.socialList}>
                        <div className={styles.socialListItem}>
                            <a href='/' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-vk')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-odnoklassniki-square')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-google')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-facebook-official')} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles.rightBlock}>
                    <div className={classnames(styles.infoRow, styles.fio)}>
                        Иванов Иван Иванович
                    </div>
                    <div className={classnames(styles.infoRow, styles.city)}>
                        г.Москва
                    </div>
                    <Education />
                </div>
            </div>
        </StaticContent>
    </div>
}

// /////////////////////////////////////////////////////////////////////////////
export default ProfilePage;
// /////////////////////////////////////////////////////////////////////////////
