import React, { ReactNode, FC, ReactChildren } from 'react';
import Link from 'next/link';
import router from 'next/router';
import styles from './NavLayout.module.scss';
import Button from '../../atoms/button/Button';

type PropTypes = {
  children: ReactNode;
};

const NavLayout: FC<PropTypes> = ({ children }: { children: ReactChildren }) => {
  const goSignUp = () => {
    router.push('/signup');
  };

  const goSignIn = () => {
    router.push('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.navBox}>
          <Link href="/">
            <div className={styles.leftNav}>
              <img src="./assets/logo.png" alt="" />
              <h1>SOMOIM</h1>
            </div>
          </Link>
          <div className={styles.rightNav}>
            <Link href="/login">
              <Button handleClick={goSignIn}>로그인</Button>
            </Link>
            <Link href="/register">
              <Button handleClick={goSignUp}>회원가입</Button>
            </Link>
          </div>
        </div>
        <div className={styles.contentSection}>{children}</div>
      </div>
    </div>
  );
};

export default NavLayout;
