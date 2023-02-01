import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonTypeEnum {
  Primary = 'primary',
  Secondary = 'secondary',
}

type ButtonType = {
  title: string;
  type: ButtonTypeEnum;
  className: string;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ title, onClick, type, className }) => {
  const buttonStyles = styles[type];
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(styles.button, buttonStyles, className, {})}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
