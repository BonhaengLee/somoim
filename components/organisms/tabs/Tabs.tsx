import React from 'react';
import styles from './Tabs.module.scss';

const Tabs = (props): JSX.Element => {
  const onClick = (item) => {
    props.onChange(item);
  };
  return (
    <ul className={styles.tabs}>
      {props.tabItems.map((item, idx) => (
        <li key={idx}>
          <button onClick={() => onClick(item)}>{item}</button>
        </li>
      ))}
      <li className="blank"></li>
    </ul>
  );
};

export default Tabs;
