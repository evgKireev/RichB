import styles from './Menu.module.scss';
import Bonnet from '../../assets/Bonnet';
import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import { accordionData } from '../../data';
import Accordion from '../Accordion';
import classNames from 'classnames';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  const widthWindow = window.innerWidth;

  return (
    <div className={styles.inner}>
      <div onClick={() => setIsActive(!isActive)} className={styles.menuTitle}>
        <Bonnet />
        <div>{widthWindow < 630 ? 'Choose YOUR Career' : 'Careers'}</div>
        <div className={classNames(styles.arrow)}>
          {isActive ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </div>
      </div>
      <div
        className={classNames(styles.accordion, { [styles.active]: isActive })}
      >
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <button className={classNames(styles.btn, { [styles.active]: isActive })}>
        Show all programmes
      </button>
    </div>
  );
};

export default Menu;
