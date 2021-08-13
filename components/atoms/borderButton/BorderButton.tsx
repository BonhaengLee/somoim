import React from 'react';
import styles from './BorderButton.module.scss';

const BorderButton = (props: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: string;
}): JSX.Element => {
  return (
    <button
      className={styles.btn}
      onClick={props.handleClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default BorderButton;
