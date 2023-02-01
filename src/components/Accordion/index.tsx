import classNames from 'classnames';
import React, { useState } from 'react';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import styles from './Accordion.module.scss';

type AccordionType = {
  title: string;
  content: string[];
};

const Accordion: React.FC<AccordionType> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [activList, setActivList] = React.useState<number>();
  return (
    <div className={styles.accordionItem}>
      <div
        className={classNames(styles.accordionTitle, {
          [styles.active]: isActive,
        })}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div>
          {isActive ? (
            <MdOutlineKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowRight />
          )}
        </div>
      </div>
      {isActive && (
        <div className={styles.accordionContent}>
          {content.map((value, index) => (
            <div
              onClick={() => setActivList(index)}
              className={classNames(styles.accordionList, {
                [styles.accordionListActive]: index === activList,
              })}
              key={index}
            >
              {value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
