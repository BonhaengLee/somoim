import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    // <main className={styles.container}>
    //   <div className={styles.first}></div>
    //   <div className={styles.second}></div>
    //   {/* <div className={styles.third}></div> */}
    //   <div className={styles.fourth}></div>
    // </main>
    <main className={styles.container}>
      <div className={styles.first}>banner</div>
      <div className={styles.second}>모임 카테고리</div>
      {/* <div className={styles.third}>3</div> */}
      <div className={styles.fourth}>모임</div>
    </main>
  );
}
