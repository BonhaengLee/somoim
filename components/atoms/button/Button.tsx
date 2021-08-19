import React from 'react';
import styles from './Button.module.scss';

const Button = (props: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: string;
}): JSX.Element => (
  <button
    type="button"
    className={styles.btn}
    onClick={props.handleClick}
    disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default Button;
