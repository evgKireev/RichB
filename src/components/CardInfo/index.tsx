import styles from './CardInfo.module.scss';
import classNames from 'classnames';
import Button, { ButtonTypeEnum } from '../Button';
import Closes from '../../assets/Closes';
import { useState } from 'react';
import Plus from '../../assets/Plus';
type CardType = {
  title: string;
  max: string;
  min: string;
  moon: string;
  price: string;
  onClick: () => void;
  infoShow: boolean;
};

const CardInfo: React.FC<CardType> = ({
  title,
  max,
  min,
  moon,
  price,
  onClick,
  infoShow,
}) => {
  return (
    <div className={styles.Card}>
      <div className={styles.title}>
        MSc Data Analytics and Information Systems Management
      </div>
      <div className={styles.duration}>
        <div> Duration:</div>
        <p>Minimum: 18 months</p>
        <p>Maximum: 36 months</p>
      </div>
      <div className={styles.dates}>
        <div> Start Dates:</div>
        <p>January, April, July, October</p>
      </div>
      <div className={styles.price}>£8,500</div>
      <Button
        className={''}
        title={'MORE INFO'}
        type={ButtonTypeEnum.Secondary}
        onClick={() => {}}
      />
      <div className={styles.closes} onClick={onClick}>
        <Plus />
      </div>
    </div>
  );
};

export default CardInfo;
