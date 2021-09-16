import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import styles from '../styles/Home.module.scss';
import banner from '../public/assets/images/gather-banner.jpeg';
import banner2 from '../public/assets/images/gather-banner-flower.png';
import Tabs from '../components/main/tabs/Tabs';
import NavLayout from './layout/NavLayout';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const pageNum = 1;

const category = 'CG_01';

const fetchBoardListFromAPI = async () => {
  // const res = await fetch('https://swapi.dev/api/people/');
  // const res = await fetch(`/board/${category}/${pageNum}`);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${category}/${pageNum}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('AccessToken').replaceAll('"', ''),
      },
    }
  );
  return res.json();
};
export default function Home(props: { imageDynamic: string }) {
  // console.log('home', props.imageDynamic);
  // const [photo, setPhoto] = useState();
  const { data, status } = useQuery('board', fetchBoardListFromAPI);
  console.log('data', data);
  console.log('status', status);

  return (
    <main className={`${styles.bodyInner} ${styles.homeFlexContainer}`}>
      <div className={styles.homeContainer}>
        <div className={styles.homeWrapper}>
          <div className={styles.homeBanner}>
            <div className={styles.bannerContents}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop
                pagination={{
                  clickable: true,
                }}
                navigation
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
                  {
                    label: '운동',
                    code: 'CG_01',
                    url: './assets/icons/icon-exercise.png',
                  },
                  {
                    label: '공부',
                    code: 'CG_02',
                    url: './assets/icons/icon-studying.png',
                  },
                  {
                    label: '생활습관',
                    code: 'CG_03',
                    url: './assets/icons/icon-lifestyle.png',
                  },
                  {
                    label: '취미',
                    code: 'CG_04',
                    url: './assets/icons/icon-hobby.png',
                  },
                  {
                    label: '감정관리',
                    code: 'CG_04',
                    url: './assets/icons/icon-mindControl.png',
                  },
                  {
                    label: '돈관리',
                    code: 'CG_05',
                    url: './assets/icons/icon-financialManagement.png',
                  },
                  {
                    label: '외국어',
                    code: 'CG_06',
                    url: './assets/icons/icon-foreignLanguage.png',
                  },
                ].map((item, idx) => (
                  <li key={item.url}>
                    <button
                      type="button"
                      onClick={() => console.log(item.label)}
                    >
                      <img src={item.url} alt="" />
                      <p>{item.label}</p>
                    </button>
                  </li>
                ))}
                <li className="blank" />
              </ul>
            </article>
          </section>
          <section className={styles.homeItemList}>
            {status === 'success' && <Tabs data={data} />}
          </section>
        </div>
      </div>
    </main>
  );
}
Home.Layout = NavLayout;

// export async function getStaticProps({ params }) {
//   const image = await getPhotos(); // fetch your data;
//   // const imageDynamic = image[param.id]; //pass the prop from the url
//   console.log('img', image);

//   return { props: { imageDynamic: image || null } };
// }
