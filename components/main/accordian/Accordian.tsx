import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tabs from '../tabs/Tabs';
import styles from './Accordian.module.scss';
import banner from '../../../public/assets/images/gather-banner.jpeg';
import parseCreatedAt from '../../../services/parseCreatedAt';
import Paging from '../../global/paging/Paging';

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
  const [changeTab, setChangeTab] = useState(props.data);

  const handleChange = (tab) => {
    if (tab === '운동') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_01'));
    } else if (tab === '공부') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_02'));
    } else if (tab === '생활습관') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_03'));
    } else if (tab === '취미') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_04'));
    } else if (tab === '감정관리') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_05'));
    } else if (tab === '돈관리') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_06'));
    } else if (tab === '외국어') {
      setChangeTab(props.data.filter((v) => v.category === 'CG_07'));
    }
  };

  return (
    <article className={styles.accordianContainer}>
      <h2>모임</h2>
      <Tabs tabItems={tabItems} onChange={handleChange} />
      <ul className={styles.posts}>
        {changeTab?.map((item) => (
          <li key={item.id}>
            <Link href={`/meetings/${item.id}`}>
              <div>
                <Image src={banner} alt="" />
                {/* * :s3 error 해결 해야함 next.config.js? */}
                <p>{item.title}</p>
                <p>{parseCreatedAt(item.created_at)}~</p>
                {/* {item.tags.map((tag) => (
              <span key={tag}>
                <p>{tag}</p>
              </span>
            ))} */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <section className={styles.postsPaging}>
        <Paging />
      </section>
    </article>
  );
};

export default Accordian;
