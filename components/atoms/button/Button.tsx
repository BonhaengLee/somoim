import React from 'react';
import styles from './Button.module.scss';

const Button = (props: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}): JSX.Element => {
  // return <Btn onClick={props.handleClick}>{props.children}</Btn>;\
  return (
    <button className={styles.btn} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
