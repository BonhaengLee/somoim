import React from 'react';
import Link from 'next/link';
import styles from './NavLayout.module.scss';

const NavLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
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
          </div>
        </div>
        <div className={styles.categoryBox}>
          <div className={styles.categoryNav}>
            <span>
              <Link href="/">
                <a>홈</a>
              </Link>
            </span>
            <span>
              <div />
              <Link href="/">
                <a>인기</a>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.contentSection}>{children}</div>
    </div>
  );
};

export default NavLayout;
