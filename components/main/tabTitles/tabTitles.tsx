import React from 'react';
import styles from './tabTitles.module.scss';

const TabTitles = (props): JSX.Element => {
  const onClick = (item) => {
    props.onChange(item);
  };
  return (
    <ul className={styles.tabTitles}>
      {props.tabItems.map((item) => (
        <li key={item}>
          <button type="button" onClick={() => onClick(item)}>
            {item}
          </button>
        </li>
      ))}
      <li className="blank" />
    </ul>
  );
};

export default TabTitles;
