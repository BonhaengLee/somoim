import React from 'react';
import styles from './Tabs.module.scss';

const Tabs = (props): JSX.Element => {
  const onClick = (item) => {
    props.onChange(item);
  }
  return (
    <ul className={styles.tabs}>
      {['운동', '공부', '생활습관', '취미', '감정관리', '돈관리', '외국어'].map(
        (item, idx) => (
          <li key={idx}>
            <button onClick={()=>onClick(item)}>{item}</button>
          </li>
        )
      )}
      <li className="blank"></li>
    </ul>
  );
};

export default Tabs;
