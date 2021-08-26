import React, { useState } from 'react';
import Image from 'next/image';
import Tabs from '../tabs/Tabs';
import styles from './Accordian.module.scss';
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

const tabItems = [
  '운동',
  '공부',
  '생활습관',
  '취미',
  '감정관리',
  '돈관리',
  '외국어',
];

const Accordian = (props): JSX.Element => {
  const [changeTab, setChangeTab] = useState(t);

  // 미완
  const handleChange = (item) => {
    if (item === '운동') setChangeTab(t);
    else setChangeTab(t2);
  };

  return (
    <article className={styles.accordianContainer}>
      <h2>모임</h2>
      <Tabs tabItems={tabItems} onChange={handleChange} />
      <section>
        {changeTab?.map((item) => (
          <article key={item.id}>
            <Image src={banner} alt="" />
            <p>{item.title}</p>
            <p>{item.startDate}</p>
            {item.tags.map((tag) => (
              <span key={tag}>
                <p>{tag}</p>
              </span>
            ))}
          </article>
        ))}
      </section>
    </article>
  );
};

export default Accordian;
