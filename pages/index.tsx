import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.bannerContainer}>
        <div className={styles.image}>{/* <img src="./assets/gather-banner.jpeg" alt="" /> */}</div>
        <div className={styles.image}>{/* <img src="./assets/gather-banner.jpeg" alt="" /> */}</div>
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.image}>{/* <img src="./assets/gather-banner.jpeg" alt="" /> */}</div>
        <div className={styles.image}>{/* <img src="./assets/gather-banner.jpeg" alt="" /> */}</div>
      </div>
    </div>
  );
}
