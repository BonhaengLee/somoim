import React, {useState} from 'react';
import Tabs from '../../molecules/Tabs/Tabs';
import styles from './Accordian.module.scss';
import Image from 'next/image';
import banner from '../../../public/assets/images/gather-banner.jpeg';

const t = [
          {
            id: 1,
            title: '건강보조식품 및 약먹기',
            startDate: '오늘부터 시작',
            tags: ['매일', '2주동안'],
          },
          {
            id: 2,
            title: '건강보조식품 및 약먹기2',
            startDate: '일요일부터 시작',
            tags: ['매일', '3주동안'],
          },
          {
            id: 3,
            title: '건강보조식품 및 약먹기3',
            startDate: '오늘부터 시작',
            tags: ['매일', '4주동안'],
          },
          {
            id: 4,
            title: '건강보조식품 및 약먹기4',
            startDate: '오늘부터 시작',
            tags: ['매일', '5주동안'],
          },
          {
            id: 5,
            title: '건강보조식품 및 약먹기5',
            startDate: '오늘부터 시작',
            tags: ['매일', '2주동안'],
          },
        ];

const t2 = [
          {
            id: 1,
            title: '외국어 공부하기',
            startDate: '오늘부터 시작',
            tags: ['매일', '2주동안'],
          },
          {
            id: 2,
            title: '외국어 공부하기2',
            startDate: '일요일부터 시작',
            tags: ['매일', '3주동안'],
          },
          {
            id: 3,
            title: '외국어 공부하기3',
            startDate: '오늘부터 시작',
            tags: ['매일', '4주동안'],
          },
          {
            id: 4,
            title: '외국어 공부하기4',
            startDate: '오늘부터 시작',
            tags: ['매일', '5주동안'],
          },
          {
            id: 5,
            title: '외국어 공부하기5',
            startDate: '오늘부터 시작',
            tags: ['매일', '2주동안'],
          },
        ];

const Accordian = (props): JSX.Element => {
  const [changeTab, setChangeTab ] = useState(t);

  const handleChange = (item) => {
    // console.log(item);
    
    if(item === "운동")     setChangeTab(t)
    else     setChangeTab(t2)
  }
  return (
    <article className={styles.accordianContainer}>
      <h2>모임</h2>
      <Tabs onChange={handleChange}/>
      <section>
        {changeTab?.map((item, idx) => (
          <article key={item.id}>
            {/* <section> */}
            <Image src={banner} alt="" />
            <p>{item.title}</p>
            <p>{item.startDate}</p>
            {item.tags.map((item, idx) => (
              <span key={idx}>
                <p>{item}</p>
              </span>
            ))}
            {/* </section> */}
          </article>
        ))}
      </section>
    </article>
  );
};

export default Accordian;
