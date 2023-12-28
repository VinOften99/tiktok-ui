import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/52cd87e5cfeee9b4e28b8676a4fd1731~c5_300x300.webp?x-expires=1702958400&x-signature=Cijagz9eqFyAa%2BoqKSsex%2B6gNEU%3D"
                alt="Vinh"
            />
            <div classNames={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Quang Vinh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenquangvinh</span>
            </div>
        </div>
    );
}

export default AccountItem;
