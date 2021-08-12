import styles from '../styles/Home.module.scss';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import banner from '../public/assets/images/gather-banner.jpeg';
import banner2 from '../public/assets/images/gather-banner-flower.png';
import { useEffect, useState } from 'react';
import { getPhotos } from './api';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export default function Home(props: { imageDynamic: string }) {
  console.log('home', props.imageDynamic);
  // const [photo, setPhoto] = useState();

  return (
    <main className={`${styles.bodyInner} ${styles.homeFlexContainer}`}>
      <div className={styles.homeContainer}>
        <div className={styles.homeWrapper}>
          <div className={styles.homeBanner}>
            <div className={styles.bannerContents}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className={styles.swiperContainer}
              >
                <SwiperSlide className={styles.swiperSlide}>
                  <div>
                    <Image src={banner} alt="" placeholder="blur" />
                    {/* <Image
                      src="https://source.unsplash.com/1400x360/?people,talk"
                      alt="Galaxy"
                      width={1000}
                      height={750}
                    /> */}
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div>
                    <Image src={banner2} alt="" placeholder="blur" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div>
                    <Image src={banner} alt="" placeholder="blur" />
                  </div>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <div>
                    <Image src={banner2} alt="" placeholder="blur" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <section className={styles.homeCategoryList}>
            <article className={styles.homeCategoryHeader}>
              <h2>모임 카테고리</h2>
              <ul>
                {[
                  { label: '운동', url: './assets/icons/icon-exercise.png' },
                  { label: '공부', url: './assets/icons/icon-studying.png' },
                  {
                    label: '생활습관',
                    url: './assets/icons/icon-lifestyle.png',
                  },
                  { label: '취미', url: './assets/icons/icon-hobby.png' },
                  {
                    label: '감정관리',
                    url: './assets/icons/icon-mindControl.png',
                  },
                  {
                    label: '돈관리',
                    url: './assets/icons/icon-financialManagement.png',
                  },
                  {
                    label: '외국어',
                    url: './assets/icons/icon-foreignLanguage.png',
                  },
                ].map((item, idx) => (
                  <li key={idx}>
                    <button onClick={() => console.log(item.label)}>
                      <img src={item.url} alt="" />
                      <p>{item.label}</p>
                    </button>
                  </li>
                ))}
                <li className="blank"></li>
              </ul>
            </article>
          </section>
          <section className={styles.homeItemList}>
            <article className={styles.homeItemHeader}>
              <h2>모임</h2>
              <ul>
                {[
                  '운동',
                  '공부',
                  '생활습관',
                  '취미',
                  '감정관리',
                  '돈관리',
                  '외국어',
                ].map((item, idx) => (
                  <li key={idx}>
                    <button onClick={() => console.log(item)}>{item}</button>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}

// export async function getStaticProps({ params }) {
//   const image = await getPhotos(); // fetch your data;
//   // const imageDynamic = image[param.id]; //pass the prop from the url
//   console.log('img', image);

//   return { props: { imageDynamic: image || null } };
// }
