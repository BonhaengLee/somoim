import React from 'react';
import styles from './Profile.module.scss';

// const ProfileImage = styled.div`
//   border-radius: 50%;
//   color: ${(props) => props.theme.blankColor};
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center center;
// `;

const Profile = (): JSX.Element => {
  return <div className={styles.profileImage} />;
};

export default Profile;
