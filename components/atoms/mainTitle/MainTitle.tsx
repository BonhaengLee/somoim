import React from 'react';
import styles from './MainTitle.module.scss';

// const Header = styled.h1`
//   font-size: 3rem;
//   font-weight: 600;
//   color: ${(props) => props.theme.mainColor};
// `;

const MainTitle = (props: { label: string }): JSX.Element => {
  return <h1 className={styles.mainTitle}>{props.label}</h1>;
};

export default MainTitle;
