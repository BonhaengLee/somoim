import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TabTitles from '../tabTitles/tabTitles';
import styles from './Tabs.module.scss';
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

const Tabs = (props): JSX.Element => {
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
    <article className={styles.tabsContainer}>
      <h2>모임</h2>
      <TabTitles tabItems={tabItems} onChange={handleChange} />
      <ul className={styles.posts}>
        {changeTab?.map((item) => (
          <li key={item.id}>
            <Link href={`/meetingDetails/${item.id}`}>
              <div>
                <img
                  className={styles.thumbnailImg}
                  src={item.thumbnail} //"https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg"
                  alt="thumbnail"
                />
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
        {/* count = itemsCountPerPage(12) * # of page  (count*page) */}
        <Paging page={props.page} count={12} setPage={props.handlePageChange} />
      </section>
    </article>
  );
};

export default Tabs;
