import React from 'react';
import styles from './CardTitle.module.scss';

const CardTitle = (props: { label: string }): JSX.Element => (
  <h2 className={styles.cardTitle}>{props.label}</h2>
);

export default CardTitle;
