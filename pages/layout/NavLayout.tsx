import React from 'react';
import Link from 'next/link';
import styles from './NavLayout.module.scss';
import { useAuth } from '../../lib/auth';
import GetOutButton from '../../components/atoms/getOutButton/GetOutButton';
import BorderButton from '../../components/atoms/borderButton/BorderButton';
import router from 'next/router';

const NavLayout = ({ children }: { children: JSX.Element }) => {
  const { user, logout } = useAuth(); // user 현재 jwt

  return (
    <div className={styles.container}>
      <nav className={styles.navWrapper}>
        <div className={styles.navBox}>
          <Link href="/">
            <div className={styles.leftNav}>
              <section>
                <article>
                  <img src="./assets/images/logo.png" alt="" />
                  <h1>SOMOIM</h1>
                </article>
              </section>
            </div>
          </Link>
          <div className={styles.rightNav}>
            {user ? (
              <span>
                <GetOutButton handleClick={() => logout()}>
                  로그아웃
                </GetOutButton>
              </span>
            ) : (
              <>
                <span>
                  <Link href="/login">
                    <a>로그인</a>
                  </Link>
                </span>
                <span>
                  <div />
                  <Link href="/signup">
                    <a>회원가입</a>
                  </Link>
                </span>
              </>
            )}
          </div>
        </div>
        <div className={styles.categoryBox}>
          <div className={styles.categoryNav}>
            <span className={styles.navBtn}>
              <Link href="/">
                <a>홈</a>
              </Link>
            </span>
            <span className={styles.navBtn}>
              <div />
              <Link href="/">
                <a>인기</a>
              </Link>
            </span>
            <div className={styles.btnBox}>
              <BorderButton handleClick={() => router.push('/create')}>
                개설하기
              </BorderButton>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.contentSection}>{children}</div>
    </div>
  );
};

export default NavLayout;
