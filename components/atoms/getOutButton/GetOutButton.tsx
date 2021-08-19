import React from 'react';
import styles from './GetOutButton.module.scss';

const GetOutButton = (props: {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // disabled?: boolean;
  children: string;
}): JSX.Element => (
  <button
    type="button"
    className={styles.GetOutBtn}
    onClick={props.handleClick}
    // disabled={props.disabled}
  >
    {props.children}
  </button>
);

export default GetOutButton;
