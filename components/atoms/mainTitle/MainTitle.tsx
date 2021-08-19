import React from 'react';
import styles from './MainTitle.module.scss';

const MainTitle = (props: { label: string }): JSX.Element => (
  <h1 className={styles.mainTitle}>{props.label}</h1>
);

export default MainTitle;
