import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { queryClient } from '../../lib/ReactQueryProvider';
import NavLayout from '../layout/NavLayout';
import styles from './meetings.module.scss';
import translateCategory from '../../services/translateCategory';
import parseCreatedAt from '../../services/parseCreatedAt';

const fetchMeetingFromAPI = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/board/${id}`,
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

const MeetingDetails = ({ params }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, status } = useQuery(
    ['meet', id],
    () => id && fetchMeetingFromAPI(String(id)),
    {
      staleTime: 10000,
    }
  );

  console.log(data, id);

  return (
    <>
      {status === 'success' && (
        <>
          <section className={styles.thumbnailContainer}>
            <div className={styles.thumbnailImgSection}>
              {data?.thumbnail && (
                <img
                  className={styles.thumbnailImg}
                  src={data.thumbnail} //"https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg"
                  alt="thumbnail"
                />
              )}
              <div className={styles.flag_wrapper}>
                {/* <img
                  className={styles.flag}
                  src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/flag-south-korea_1f1f0-1f1f7.png"
                  alt="South Korean Flag"
                /> */}
              </div>
            </div>

            <div className={styles.thumbnailDescSection}>
              <h2 className={styles.header2}>{data?.title}</h2>
              <h3 className={styles.header3}>
                {translateCategory(data?.category)}
                <div>
                  <section>
                    <img src="/assets/icons/user.svg" alt="" />
                    <p>{data?.author}</p>
                  </section>
                  <section>
                    <img src="/assets/icons/content-writing.svg" alt="" />
                    <p>{data && parseCreatedAt(data?.created_at)}</p>
                  </section>
                </div>
              </h3>
              <p className={styles.description}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div className={styles.interests}>
                <span className={styles.interests_item}>Technology</span>
                <span className={styles.interests_item}>Management</span>
                <span className={styles.interests_item}>Leadership</span>
              </div>
            </div>
          </section>

          <section className={styles.contentSection}>
            <div
              dangerouslySetInnerHTML={{
                __html: data?.content,
              }}
            />
          </section>

          <div className={styles.info}>
            <ul className={styles.ulCustom}>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/round-pushpin_1f4cd.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>참가비용 : {data?.fee}</p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/speaking-head_1f5e3-fe0f.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모임빈도 : {data?.frequency}</p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모임장소 : {data?.place}</p>
              </li>

              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/round-pushpin_1f4cd.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>
                  기간 : {data?.start_at} ~ {data?.finish_at}
                </p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/speaking-head_1f5e3-fe0f.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>
                  나이 : {data?.min_age} ~ {data?.max_age}
                </p>
              </li>
              <li className={styles.liCustom}>
                <div className={styles.link_img_wrapper}>
                  <img
                    className={styles.link_img}
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/samsung/265/globe-with-meridians_1f310.png"
                    alt=""
                  />
                </div>
                <p className={styles.pCustom}>모집인원 : {data?.numOfPeople}</p>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};
MeetingDetails.Layout = NavLayout;

export default MeetingDetails;
