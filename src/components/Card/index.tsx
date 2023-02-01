import styles from './Card.module.scss';
import classNames from 'classnames';
import Button, { ButtonTypeEnum } from '../Button';
import Bonnet from '../../assets/Bonnet';
import Calendar from '../../assets/Calendar';
import CardInfo from '../CardInfo';
import { useState } from 'react';
import Closes from '../../assets/Closes';
type CardType = {
  images: string;
  subTitle: string;
  title: string;
  postgraduate: string;
  time: string;
};

const Card: React.FC<CardType> = ({
  title,
  images,
  subTitle,
  postgraduate,
  time,
}) => {
  const [infoShow, setInfoShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.Card}>
        <div className={styles.img}>
          <img src={images} alt="logo" />
        </div>
        <div className={styles.subTitle}>{subTitle}</div>
        <div className={styles.title}>{title}</div>
        <div className={styles.Postgraduate}>
          <div>
            <Bonnet />
          </div>
          <div> {postgraduate}</div>
        </div>
        <div className={styles.time}>
          <div>
            <Calendar />
          </div>
          <div> {`Every ${time} weeks`}</div>
        </div>
        <div className={styles.price}>£12,650</div>
        <Button
          className={styles.btn}
          title={'MORE INFO'}
          type={ButtonTypeEnum.Primary}
          onClick={() => setInfoShow(true)}
        />
      </div>
      <div
        className={classNames(styles.CardInfo, {
          [styles.CardInfoActive]: infoShow,
        })}
      >
        <CardInfo
          title={''}
          max={''}
          min={''}
          moon={''}
          price={''}
          onClick={() => setInfoShow(false)}
          infoShow={infoShow}
        />
      </div>
    </div>
  );
};

export default Card;
