// /////////////////////////////////////////////////////////////////////////////
import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import LinkButton from '../../../common/LinkButton/LinkButton';
import ItemContent from '../../../common/ItemContent/ItemContent';
import StaticContent from '../../../common/StaticContent/StaticContent';
import styles from './styles.css';
// /////////////////////////////////////////////////////////////////////////////
const propsPage = {
    titlePage: 'Ваш профиль'
}
const education = [
    {
        type: 'Высшее образование',
        form: 'Аспиранутура',
        date_start: '2007',
        date_end: '2013',
        group_code: 'T-154',
        name: 'ЕМРПТ',
        direction: 'Информатика',
        faculty: 'Информационных систем и технологий',
        faculty_code: '05.13.01'
    },
    {
        type: 'Высшее образование',
        form: 'Аспиранутура',
        date_start: '2007',
        date_end: '2013',
        group_code: 'T-154',
        name: 'ЕМРПТ',
        direction: 'Информатика',
        faculty: 'Информационных систем и технологий',
        faculty_code: '05.13.01'
    },
    {
        type: 'Высшее образование',
        form: 'Аспиранутура',
        date_start: '2007',
        date_end: '2013',
        group_code: 'T-154',
        name: 'ЕМРПТ',
        direction: 'Информатика',
        faculty: 'Информационных систем и технологий',
        code: '05.13.01'
    },
    {
        type: 'Высшее образование',
        form: 'Аспиранутура',
        date_start: '2007',
        date_end: '2013',
        group_code: 'T-154',
        name: 'ЕМРПТ',
        direction: 'Информатика',
        faculty: 'Информационных систем и технологий',
        faculty_code: '05.13.01'
    }
]

// /////////////////////////////////////////////////////////////////////////////
function EducationItem({ info }) {
    return <div className={styles.educationItem}>
        <div className={styles.educationItemTopInfo}>
            <div className={styles.educationItemType}>{info.type}</div>
            <div className={styles.educationItemDate}>{info.date_start} - {info.date_end}</div>
        </div>
        <div className={styles.educationItemName}>{info.name}</div>
        <div className={styles.educationItemInfo}>{info.direction}</div>
        <div className={styles.educationItemInfo}>{info.faculty}</div>
        <div className={styles.educationItemGroup}>{info.group_code}</div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
function Education(props) {
    const { education } = props;
    return <div className={styles.educationBlock}>
        <div className={classnames(styles.educationBlockTitle, styles.lineBottom)}>Образование</div>
        <div className={styles.educationList}>
            {
                _.map(education, (item, index) => <EducationItem key={index} info={item} />)
            }
        </div>
    </div>;
}

// /////////////////////////////////////////////////////////////////////////////
function ProfilePage() {
    return <StaticContent {...propsPage}>
        <div className={styles.btnWrapper}>
            <LinkButton
                type='link-route'
                url='/admin/profile/edit'
                icon='fa-pencil'
                styleClass={classnames(styles.btn, styles.btnBlue)}>
                Редактировать</LinkButton>
        </div>
        <div className={styles.mainWrapper}>
            <div className={styles.leftBlock}>
                <ItemContent>
                    <div className={styles.avatarWrapper}>
                        <img src='http://lorempixel.com/200/200'
                            alt="Аватар"
                            className={styles.avatarWrapperPicture} />
                    </div>
                    <div className={styles.socialList}>
                        <div className={styles.socialListItem}>
                            <a href='/' target='_blank' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-vk')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' target='_blank' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-odnoklassniki-square')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' target='_blank' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-google')} />
                            </a>
                        </div>
                        <div className={styles.socialListItem}>
                            <a href='/' target='_blank' className={styles.socialListItemLink}>
                                <i className={classnames('fa', 'fa-facebook-official')} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.contactsWrapper}>
                        <table className={styles.contactsTable}>
                            <tbody>
                                <tr>
                                    <td>Телефон:</td>
                                    <td>
                                        <a href="/"
                                            target='_blank'
                                            className={styles.contactsTableLink}>
                                            6584132
                                            </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Моб:</td>
                                    <td>
                                        <a href="/"
                                            target='_blank'
                                            className={styles.contactsTableLink}>
                                            +79500406444
                                            </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <a href="/"
                                            target='_blank'
                                            className={styles.contactsTableLink}>
                                            vian142@gmail.com
                                            </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </ItemContent>
            </div>
            <div className={styles.rightBlock}>
                <ItemContent>
                    <div className={classnames(styles.fio)}>
                        Иванов Иван Иванович
                        </div>
                    <div className={classnames(styles.infoRow, styles.city)}>
                        г.Москва
                        </div>
                    <Education education={education} />
                </ItemContent>
            </div>
        </div>
        <ItemContent>
            <div className={styles.statisticContainer}>
                <div className={classnames(styles.statisticContainerTitle, styles.lineBottom)}>Статистика</div>
                <div className={styles.statisticBlock}>
                    Ваша статистика
                </div>
            </div>
        </ItemContent>
    </StaticContent>
}

// /////////////////////////////////////////////////////////////////////////////
export default ProfilePage;
// /////////////////////////////////////////////////////////////////////////////
